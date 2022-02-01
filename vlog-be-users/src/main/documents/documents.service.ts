import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Mongoose } from 'mongoose';
import jwt_decode from 'jwt-decode';
const stringifyObject = require('stringify-object');
import { DocumentInput } from './dto/document.input';
import { UpdateDocumentInput } from './dto/update-document.input';
import { Documents } from './interface/documents.interface';
import { TokenInput } from '../user/dto/token.inputType';
import { DocumentTypeInter } from './interface/documentType.inter';
import { User } from './../user/interface/user.interface';
import CONFIG from '../../config/config';
import { ObjectType } from '@nestjs/graphql';
import * as mongoose from "mongoose";
import { BlobServiceClient, BlockBlobClient } from '@azure/storage-blob';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';
var ObjectId = require('mongodb').ObjectID;

@Injectable()
export class DocumentsService {
  constructor(
    @InjectModel('User')
    private User: Model<User>,
    @InjectModel('Document')
    private Documents: Model<Documents>,
    @InjectModel('DocumentType')
    private documentType: Model<DocumentTypeInter>,
    @InjectQueue('documentDeleteQueue') private documentDeleteQueue: Queue,
  ) { }
  private azureConnection = `${process.env.STORAGE_CONNECTION_KEY1 ? process.env.STORAGE_CONNECTION_KEY1 : 'DefaultEndpointsProtocol=https;AccountName=vlogmakelaarsstorage;AccountKey=DP2bggKLPdGOJAuxSNWzYxOWnldKz45iXFRRkF/OAqYGM4V+Pn+lGqNnJtyZrSltuwio77/yI8/8ps8J8ngRUA==;EndpointSuffix=core.windows.net'}`


  async create(createDocument, Token, Responses, Field, UserConfig) {
    try {
      const { documentType, userId } = createDocument;
      if (!Object.keys(UserConfig.DOCUMENT_TYPE_LIST).includes(`${documentType}`)) {
        const replaceStr = Responses.ERROR.INVALID_FIELD.replace('XXXX', `${Field.DOCUMENT_TYPE}`)
        throw new HttpException(`${replaceStr}`, HttpStatus.METHOD_NOT_ALLOWED)
      }

      const findOneDocument = await this.Documents.findOne({ userId: userId, documentType: documentType, isDeleted: false })
      if (findOneDocument) {
        const replaceStr = Responses.ERROR.ALREADY_EXIST.replace('XXXX', Field.DOCUMENT);
        throw new HttpException(replaceStr, HttpStatus.CONFLICT)
      }

      const user = await this.User.findOne({ _id: userId });
      if (!user) {
        const replaceStr = Responses.ERROR.NOT_FOUND.replace('XXXX', 'User id ')
        throw new HttpException(replaceStr, HttpStatus.NOT_FOUND)
      }

      const decodeTokenData: TokenInput = jwt_decode(Token);
      const documentData = new this.Documents(createDocument);
      console.log("save data", documentData)
      if (!documentData.isDeleted) {
        documentData.isDeleted = false;
      }
      const saveDocumentData = await documentData.save();
      console.log("save data", saveDocumentData)

      const count = await this.Documents.find({ userId: userId, isDeleted: false }).count();

      const status = user.status;
      let percent = parseInt(user.profileCompletion);
      let req;
      switch (status) {
        case 0: {
          req = CONFIG.STUDENT_REQUIRED_COUNT;
          break;
        }
        case 1: {
          req = CONFIG.ENTREPRENEUR_REQUIRED_COUNT;
          break;
        }
        case 2: {
          req = CONFIG.EMPLOYER_REQUIRED_COUNT;
          break;
        }
        default: {
          req = CONFIG.EMPLOYER_REQUIRED_COUNT;
          break;
        }
      }
      console.log("count", count);
      console.log("req", req)
      const total = 50 + Math.floor(((count / req) * 100) / 2);
      console.log("total", total)
      const updateUserData = await this.User.findByIdAndUpdate({ _id: userId }, { profileCompletion: `${JSON.stringify(total)}` }, { new: true });
      console.log("update user data", updateUserData)
      console.log("user:", user, count, "percentage:", total, req);
      return saveDocumentData;
    }
    catch (error) {
      console.log(error)
      if (error.code === 11000) {
        const replaceStr = Responses.ERROR.ALREADY_EXIST.replace('XXXX', 'User')
        throw new HttpException(replaceStr, HttpStatus.CONFLICT)
      }
      if (error) {
        throw new HttpException(error?.response, error?.status)
      }
      throw new HttpException(Responses.ERROR.ERROR_VALUE, error);
    }

  }


  async addMultipleDocuments(createDocument, token, Responses, Field, UserConfig) {
    try {
      console.log("createdocument", createDocument[0])
      const { documentType, userId } = createDocument[0];

      const user = await this.User.findOne({ _id: userId });
      if (!user) {
        const replaceStr = Responses.ERROR.NOT_FOUND.replace('XXXX', 'User')
        throw new HttpException(replaceStr, HttpStatus.NOT_FOUND)
      }

      console.log("users", userId)
      for (let i = 0; i < createDocument.length; i++) {
        if (!createDocument[i].isDeleted)
          createDocument[i].isDeleted = false;
      }
      let isError = {}
      for (let key in createDocument) {
        if (!Object.keys(UserConfig.DOCUMENT_TYPE_LIST).includes(`${createDocument[key].documentType}`)) {
          isError[key] = createDocument[key].documentType
        }
      }
      if (Object.entries(isError).length !== 0) {
        const errorObj = stringifyObject(isError, {
          indent: ' ',
          singleQuotes: true,

        });
        // console.log(pretty)
        const replaceStr = Responses.ERROR.INVALID_FIELD.replace('XXXX', `${Field.DOCUMENT_TYPE}`)
        isError["Document Type"] = replaceStr;
        throw new HttpException(isError, HttpStatus.METHOD_NOT_ALLOWED)
      }
      let userIdList = [];

      //  for(let key in createDocument){
      //   userIdList.push(createDocument[key].userId)
      //  }
      // const findDocument = await this.Documents.find({userId:{$in:userIdList}})
      // if(findDocument){
      //   const replaceStr = Responses.ERROR.ALREADY_EXIST.replace('XXXX', Field.DOCUMENT);
      //   throw new HttpException(replaceStr, HttpStatus.CONFLICT)
      // }
      const decodeTokenData: TokenInput = jwt_decode(token);
      const insertManyDocuments = await this.Documents.insertMany(createDocument)
      console.log("insert many", insertManyDocuments)
      const count = await this.Documents.find({ userId: userId, isDeleted: false }).count();
      if (!userId) {
        const replaceStr = Responses.ERROR.NOT_FOUND.replace('XXXX', 'User id ')
        throw new HttpException(replaceStr, HttpStatus.NOT_FOUND)
      }

      const status = user.status;
      let percent = parseInt(user.profileCompletion);
      let req;
      switch (status) {
        case 0: {
          req = CONFIG.STUDENT_REQUIRED_COUNT;
          break;
        }
        case 1: {
          req = CONFIG.ENTREPRENEUR_REQUIRED_COUNT;
          break;
        }
        case 2: {
          req = CONFIG.EMPLOYER_REQUIRED_COUNT;
          break;
        }
      }
      const total = 50 + Math.floor(((count / req) * 100) / 2);
      const updateUserData = await this.User.findByIdAndUpdate({ _id: userId }, { profileCompletion: `${JSON.stringify(total)}` }, { new: true });
      console.log("update user data", updateUserData)
      return insertManyDocuments;
    }
    catch (error) {
      console.log(error.status)
      if (error.status === 405) {
        throw new HttpException(error.response, error.status)
      }
      if (error.status === 409) {
        throw new HttpException(error.response, error.status)
      }
      if (error.code === 11000) {
        const replaceStr = Responses.ERROR.ALREADY_EXIST.replace('XXXX', 'User')
        throw new HttpException(replaceStr, HttpStatus.CONFLICT)
      }
      throw new HttpException(Responses.ERROR.ERROR_VALUE, error);
    }
  }
  async findAll(perPage, pageNum, sort, Responses, Field) {
    try {

      const allUserDocuments = await this.Documents.find({ isDeleted: false }).limit(perPage).skip(perPage * pageNum)
        .sort({
          '_id': sort === "asc" ? 1 : sort === 'desc' ? -1 : 1
        });

      if (allUserDocuments.length < 1 || allUserDocuments.length === undefined) {
        const replaceStr = Responses.ERROR.NOT_FOUND.replace('XXXX', 'Data')
        throw new HttpException(replaceStr, HttpStatus.NOT_FOUND);
      }
      const totalCount = await this.Documents.find({ isDeleted: false }).countDocuments();
      const TotalDataAndTotalCount = {
        data: allUserDocuments,
        totalCount,
      }
      return TotalDataAndTotalCount;
    } catch (err) {
      console.log(err);
      throw new HttpException(Responses.ERROR.ERROR_VALUE, err);
    }

  }

  async getAllDocumentByUserid(perPage, pageNum, sort, Responses, Field, userId) {
    try {

      const allUserDocuments = await this.Documents.find({ userId: userId, isDeleted: false }).limit(perPage).skip(perPage * pageNum)
        .sort({
          '_id': sort === "asc" ? 1 : sort === 'desc' ? -1 : 1
        });

      if (allUserDocuments.length < 1 || allUserDocuments.length === undefined) {
        const replaceStr = Responses.ERROR.NOT_FOUND.replace('XXXX', 'Data')
        throw new HttpException(replaceStr, HttpStatus.NOT_FOUND);
      }
      const totalCount = await this.Documents.find({ userId: userId, isDeleted: false }).countDocuments();
      const TotalDataAndTotalCount = {
        data: allUserDocuments,
        totalCount,
      }
      return TotalDataAndTotalCount;
    } catch (err) {
      throw new HttpException(Responses.ERROR.ERROR_VALUE, err);
    }
  }

  async getAllDocumentByOwnerId(perPage, pageNum, sort, Responses, Field, userId) {
    try {

      const allUserDocuments = await this.Documents.find({ userId: userId, isDeleted: false }).limit(perPage).skip(perPage * pageNum)
        .sort({
          '_id': sort === "asc" ? 1 : sort === 'desc' ? -1 : 1
        });

      if (allUserDocuments.length < 1 || allUserDocuments.length === undefined) {
        const replaceStr = Responses.ERROR.NOT_FOUND.replace('XXXX', 'Data')
        throw new HttpException(replaceStr, HttpStatus.NOT_FOUND);
      }
      const totalCount = await this.Documents.find({ userId: userId, isDeleted: false }).countDocuments();
      const TotalDataAndTotalCount = {
        data: allUserDocuments,
        totalCount,
      }
      return TotalDataAndTotalCount;
    } catch (err) {
      throw new HttpException(Responses.ERROR.ERROR_VALUE, err);
    }
  }

  async findOne(id: string, token, Responses) {
    try {
      const userDocumentdata = await this.Documents.findOne({ _id: id, isDeleted: false });
      if (!userDocumentdata) {
        const replaceStr = Responses.ERROR.NOT_FOUND.replace('XXXX', "User")
        throw new HttpException(replaceStr, HttpStatus.NOT_FOUND);
      }

      const decodeTokenData: TokenInput = jwt_decode(token);
      if (decodeTokenData.realm_access.roles.includes('admin')) {
        return userDocumentdata;
      }

      if (decodeTokenData.sub !== userDocumentdata.userId) {
        throw new HttpException(Responses.ERROR.FORBIDDEN, HttpStatus.FORBIDDEN);
      }
      return userDocumentdata;
    } catch (error) {
      throw new HttpException(Responses.ERROR.ERROR_VALUE, error);
    }
  }

  async update(updateDocument: UpdateDocumentInput, token, Responses, Field, UserConfig) {
    try {
      const { documentType } = updateDocument;
      if (!Object.keys(UserConfig.DOCUMENT_TYPE_LIST).includes(`${documentType}`)) {
        const replaceStr = Responses.ERROR.INVALID_FIELD.replace('XXXX', `${Field.DOCUMENT_TYPE}`)
        throw new HttpException(`${replaceStr}`, HttpStatus.METHOD_NOT_ALLOWED)
      }
      const decodeTokenData: TokenInput = jwt_decode(token);
      const { sub: userId } = decodeTokenData;
      const userProfileData = await this.Documents.findById({ _id: updateDocument._id });
      if (!userProfileData) {
        const replaceStr = Responses.ERROR.NOT_FOUND.replace("XXXX", 'User')
        throw new HttpException(replaceStr, HttpStatus.NOT_FOUND);
      }
      if (decodeTokenData.realm_access.roles.includes('admin')) {
        const updateData = await this.Documents.findOneAndUpdate({ _id: updateDocument._id }, updateDocument, { new: true });
        return updateData;
      }

      if (userId !== userProfileData._id) {
        throw new HttpException(Responses.ERROR.FORBIDDEN, HttpStatus.FORBIDDEN);
      }

      const updateData = await this.Documents.findOneAndUpdate({ _id: updateDocument._id }, updateDocument, { new: true });
      return updateData;
    } catch (error) {
      console.log(error);
      if (error.code === 11000) {
        const replaceStr = Responses.ERROR.ALREADY_EXIST.replace('XXXX', 'User')
        throw new HttpException(replaceStr, HttpStatus.CONFLICT)
      }
      if (error) {
        throw new HttpException(error?.response, error?.status)
      }
      throw new HttpException(Responses.ERROR.ERROR_VALUE, error);
    }
  }
  async findByBlobId(userid, blobid, token, Responses) {
    try {
      const data = await this.Documents.findOne({ userId: userid, blobId: blobid });
      if (!data) {
        const replaceStr = Responses.ERROR.NOT_FOUND.replace('XXXX', "User")
        throw new HttpException(replaceStr, HttpStatus.NOT_FOUND);
      }
      return data;
    } catch (err) {
      console.log(err)
    }
  }
  async deleteBlob(fileType, blobId, Responses) {
    try {

      const blobClientService = BlobServiceClient.fromConnectionString(this.azureConnection);
      const containerClient = blobClientService.getContainerClient(fileType);
      const blobClient = await containerClient.getBlockBlobClient(blobId);
      const isFileDeleted = await blobClient.deleteIfExists();
      console.log("blob delete status:", isFileDeleted.succeeded, "Error Code:", isFileDeleted.errorCode, "Status Code:", isFileDeleted._response.status);

      if (isFileDeleted.succeeded) {
        return Responses.ERROR.SUCCESSFULLY_DELETED_BLOB;
      }

      return Responses.ERROR.FAILED_TO_DELETE_BLOB;
    } catch (error) {
      throw new HttpException(error, error);
    }
  }

  async remove(id, did, token, Responses) {
    try {
      const decodeTokenData: TokenInput = jwt_decode(token);
      if (decodeTokenData.realm_access.roles.includes('admin') || id == decodeTokenData.sub) {
        const doc = await this.Documents.findOne({ _id: did, userId: id });
        if (doc != null) {

          const updateDoc = await this.Documents.findByIdAndUpdate({ _id: did }, { isDeleted: true }, { new: true });
          const count = await this.Documents.find({ userId: id, isDeleted: false }).count();
          const user = await this.User.findOne({ _id: id });
          const status = user.status;
          let percent = parseInt(user.profileCompletion);
          let req;
          switch (status) {
            case 0: {
              req = CONFIG.STUDENT_REQUIRED_COUNT;
              break;
            }
            case 1: {
              req = CONFIG.ENTREPRENEUR_REQUIRED_COUNT;
              break;
            }
            case 2: {
              req = CONFIG.EMPLOYER_REQUIRED_COUNT;
              break;
            }
            default: {
              req = CONFIG.EMPLOYER_REQUIRED_COUNT;
              break;
            }
          }
          console.log("count", count);
          console.log("req", req)
          const total = 50 + Math.floor(((count / req) * 100) / 2);
          console.log("total", total)
          const updateUserData = await this.User.findByIdAndUpdate({ _id: id }, { profileCompletion: `${JSON.stringify(total)}` }, { new: true });
          console.log("update user data", updateUserData)
          return updateDoc;
        } else {

          const replaceStr = Responses.ERROR.NOT_FOUND.replace('XXXX', 'Document')
          throw new HttpException(replaceStr, 404);
        }

      }
      else {
        throw new HttpException(Responses.ERROR.FORBIDDEN, 403)
      }
    } catch (error) {
      console.log(error);
      if (error.code === 11000) {
        const replaceStr = Responses.ERROR.ALREADY_EXIST.replace('XXXX', 'User')
        throw new HttpException(replaceStr, HttpStatus.CONFLICT)
      }
      if (error) {
        throw new HttpException(error?.response, error?.status)
      }
      throw new HttpException(Responses.ERROR.ERROR_VALUE, error);
    }
  }
  async addToQueueDocumentsProducer(userId, docId) {
    try {
      const containerName = process.env.USER_DOCS_CONTAINER;
      let findDocument = await this.Documents.findOne({ _id: docId, userId });
      if(findDocument?.blobId){
        const job = await this.documentDeleteQueue.add('documentsDeleteFromContainer-job', {
          blobId: findDocument?.blobId,
          containerName: containerName,
        });
      }
    }
    catch (error) {
      console.log("error", error)
    }
  }
  async removeVlogFromAzureBlob(fileName, containerName) {
    try {
      let deleteFileAzureBlob = await this.deleteBlobAzureBlob(fileName, containerName);
      return deleteFileAzureBlob;
    }
    catch (error) {
      console.log("error", error);
    }
  }
  getBlobClient(fileName: string, containerName): BlockBlobClient {
    const blobClientService = BlobServiceClient.fromConnectionString(process.env.AZURE_CONNECTION);
    const containerClient = blobClientService.getContainerClient(containerName);
    const blobClient = containerClient.getBlockBlobClient(fileName);
    return blobClient;
  }

  async deleteBlobAzureBlob(filename, containerName) {
    try {
      const findClient = this.getBlobClient(filename, containerName);
      const deleteFile = await findClient.deleteIfExists();
      if (deleteFile?.succeeded == true) {
        return "successed"
      }
    } catch (error) {
      console.log("error", error)
    }

  }
}