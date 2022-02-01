import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TokenInput } from '../user/dto/token.inputType';
import { CreateVlogInput } from './dto/create.vlog.input';
import { UpdateVlogInput } from './dto/update.vlog.input';
import { Vlog } from './interface/vlog.interface';
import { User } from '../user/interface/user.interface';
import jwt_decode from 'jwt-decode';
import { BlobServiceClient, BlockBlobClient } from '@azure/storage-blob';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';
@Injectable()
export class VlogService {

  constructor(
    @InjectModel('Vlog')
    private VlogObject: Model<Vlog>,
    @InjectModel('User')
    private User: Model<User>,

    @InjectQueue('vlogQueue') private vlogQueue: Queue,

  ) { }
  public async ValidationInput(vlog, Responses, Field) {
    try {
      const { userId } = vlog;
      const users = await this.User.findOne({ _id: userId });
      if (!users) {
        throw new HttpException(Responses.ERROR.VLOG_CANT_FIND_USER, 409);
      }
      return;
    } catch (err) {
      console.log(err)
      throw new HttpException(err, err);
    }
  }
  async create(createVlogInput: CreateVlogInput, token, Responses, fields) {
    try {
      const NewVlog = new this.VlogObject(createVlogInput);
      if (!NewVlog) {
        const replaceStr = Responses.ERROR.NOT_UPLOADED.replace('XXXX', "Vlog")
        throw new HttpException(replaceStr, HttpStatus.NOT_ACCEPTABLE);
      }
      const save = await NewVlog.save();
      return save;
    } catch (error) {
      console.log(error);
      throw new HttpException(Responses.ERROR.ERROR_VALUE, error);
    }
  }

  async findAll(userId, perPage, pageNum, sort, token, Responses, Field) {
    try {


      const decodeTokenData: TokenInput = jwt_decode(token);
      let allVlogData;
      if (userId) {
        allVlogData = await this.VlogObject.find({ userId: userId }).limit(perPage).skip(perPage * pageNum)
          .sort({
            '_id': sort === "asc" ? 1 : sort === 'desc' ? -1 : 1
          });

      } else {
        allVlogData = await this.VlogObject.find({ userId: decodeTokenData.sub }).limit(perPage).skip(perPage * pageNum)
          .sort({
            '_id': sort === "asc" ? 1 : sort === 'desc' ? -1 : 1
          });
      }

      if (allVlogData.length < 1 || allVlogData.length === undefined) {
        const replaceStr = Responses.ERROR.NOT_FOUND.replace('XXXX', "Vlog")
        throw new HttpException(replaceStr, HttpStatus.NOT_FOUND);
      }
      return allVlogData;


    } catch (err) {
      console.log(err);
      throw new HttpException(Responses.ERROR.ERROR_VALUE, err);
    }
  }

  async findOne(id: string, token, Responses, Field) {

    try {
      const vlogdata = await this.VlogObject.findById({ _id: id });
      if (!vlogdata) {
        const replaceStr = Responses.ERROR.NOT_FOUND.replace('XXXX', "Vlog")
        throw new HttpException(replaceStr, HttpStatus.NOT_FOUND);
      }

      const decodeTokenData: TokenInput = jwt_decode(token);
      if (decodeTokenData.realm_access.roles.includes('admin')) {
        return vlogdata;
      }
      if (decodeTokenData.sub !== vlogdata.userId) {
        throw new HttpException(Responses.ERROR.FORBIDDEN, HttpStatus.FORBIDDEN);
      }
      return vlogdata;
    } catch (error) {
      console.log(error);
      throw new HttpException(Responses.ERROR.ERROR_VALUE, error);
    }
  }

  async update(id: string, updateVlogInput: UpdateVlogInput, token, Responses, Field) {
    try {
      const decodeTokenData: TokenInput = jwt_decode(token);
      const vlogdata = await this.VlogObject.findById({ _id: id });
      if (!vlogdata) {
        const replaceStr = Responses.ERROR.NOT_FOUND.replace('XXXX', "Vlog")
        throw new HttpException(replaceStr, HttpStatus.NOT_FOUND);
      }
      if (decodeTokenData.realm_access.roles.includes('admin')) {
        const data = this.VlogObject.findByIdAndUpdate(vlogdata._id, updateVlogInput);
        return data;
      }
      if (decodeTokenData.sub !== vlogdata.userId) {
        throw new HttpException(Responses.ERROR.FORBIDDEN, HttpStatus.FORBIDDEN);
      }
      const data = this.VlogObject.findByIdAndUpdate(vlogdata._id, updateVlogInput);
      return data;

    } catch (error) {
      throw new HttpException(Responses.ERROR.ERROR_VALUE, error);
    }
  }

  async remove(id: string, token, Responses, Field) {
    try {
      const VlogData = await this.VlogObject.findById({ _id: id });

      if (!VlogData) {
        const replaceStr = Responses.ERROR.NOT_FOUND.replace('XXXX', "Vlog")
        throw new HttpException(replaceStr, HttpStatus.NOT_FOUND);
      }
      const job = await this.vlogQueue.add('vlogRemoveFromContainer-job', {
        vlogBlobID: VlogData?.vlogVideo
      });

      // const decodeTokenData: TokenInput = jwt_decode(token);

      // if (decodeTokenData.sub !== VlogData.userId) {
      //   throw new HttpException(Responses.ERROR.FORBIDDEN, HttpStatus.FORBIDDEN);
      // }
      const deletedData = await this.VlogObject.findByIdAndDelete({ _id: id });
      return deletedData;

    } catch (error) {
      console.log(error)
      throw new HttpException(Responses.ERROR.ERROR_VALUE, error);
    }
  }

  async removeVlogFromAzureBlob(fileName) {
    try {
      const container = process.env.USER_VLOG_CONTAINER;
      const deleteFileAzureBlob = await this.deleteBlobAzureBlob(fileName, container);
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

  async deleteBlobAzureBlob(filename, container) {
    try {
        const findClient = this.getBlobClient(filename, container);
        const deleteFile = await findClient.deleteIfExists();
        if (deleteFile?.succeeded == true) {
          return "successed"
        }
    } catch (error) {
      console.log("error", error)
    }

  }
}


