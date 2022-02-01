import {
  ForbiddenException,
  HttpException,
  HttpService,
  HttpStatus,
  Inject,
  Injectable,
  OnModuleInit,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
var validator = require('validator');
const fs = require('fs')
import { User } from './interface/user.interface';
import { UserDto } from './dto/user.dto';
const qs = require('querystring');
import jwt_decode from 'jwt-decode';
import { UserprofileInput } from './dto/userprofile.input';
import { Realm_access, TokenInput } from './dto/token.inputType';
import { Vlog } from '../vlog/interface/vlog.interface';
import { UserProfileSchema } from './entities/user.schema';
import { EmailSubscriberInterface } from "./interface/email.subscriber.inter";
import { BlobServiceClient, BlockBlobClient, logger } from '@azure/storage-blob';
import { Documents } from '../documents/interface/documents.interface';
import { DocumentsService } from '../documents/documents.service';
let path = require('path');
import CONFIG from 'src/config/config';
import { InjectQueue, Process } from '@nestjs/bull';
import { Job, Queue } from 'bull';
var storage = require("azure-storage")
const axios = require('axios');
@Injectable()
export class UsersService implements OnModuleInit {
  onModuleInit() {
    console.log(`The module has been initialized.`);
  }
  onApplicationBootstrap() {
    console.log("On Application called")
  }
  onModuleDestroy() {
    console.log("on module destroy called")
  }
  beforeApplicationShutdown() {
    console.log("before applications shutdown")
  }
  constructor(
    @InjectModel('User')
    private userProfile: Model<User>,
    private httpService: HttpService,
    @InjectModel('Vlog')
    private VlogObject: Model<Vlog>,
    @InjectModel('Document')
    private Documents: Model<Documents>,
    @InjectModel('EmailSubscriber')
    private emailSubscriber: Model<EmailSubscriberInterface>,

    private documentService: DocumentsService,
    @InjectQueue('documentQueue') private documentQueue: Queue,

    @InjectQueue('vlogQueueRemove') private vlogQueueRemove: Queue,

    // @Inject("APPLICATION_SERVICE") private readonly application_service: ClientProxy,

  ) {
  }

  public async findbyRole(role) {
    const totalUserCount = await this.userProfile.find({ isDeleted: "0", role: role }).count();
    return totalUserCount;
  }
  //// environment variables [start here]///
  private KeycloakUrl = `${process.env.KEYCLOAK_HOST}/auth/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/token`;

  //// environment variables [End here]///
  public async ValidationUpdateData(updateData, Responses, FIELD) {
    const isError = {};

    console.log(updateData);
    const oldUser = await this.userProfile.findOne({ _id: updateData._id });

    console.log(oldUser)
    let obj = [];
    if (oldUser.email != updateData.email) {
      if (updateData.email) {
        obj.push({ email: updateData.email })
      }
    }
    if (oldUser.mobileNumber != updateData.mobileNumber) {
      if (updateData.mobileNumber) {
        obj.push({ mobileNumber: updateData.mobileNumber })
      }
    }
    console.log("object:", obj)
    if (obj[0] || obj[1]) {

      const user = await this.userProfile.findOne({
        $or: obj
      });
      if (user) {
        if ((updateData.mobileNumber) && user.mobileNumber == updateData.mobileNumber) {
          const replaceStr = Responses.ERROR.ALREADY_EXIST.replace('XXXX', "Mobile number")
          throw new HttpException(replaceStr, HttpStatus.CONFLICT)
        }
        if ((updateData.email) && user.email == updateData.email) {
          const replaceStr = Responses.ERROR.ALREADY_EXIST.replace('XXXX', "Email")
          throw new HttpException(replaceStr, HttpStatus.CONFLICT)
        }
      }
    }
    if ((updateData.firstName) && updateData.firstName.length <= 1) {
      const replaceStr = Responses.VALIDATION.MUST_BE_AT_CHARACTER.replace('XXXX', FIELD.FIRST_NAME);
      const replaceChar = replaceStr.replace('CHAR_XXXX', '2')
      isError[FIELD.FIRST_NAME] = replaceChar;
    }
    if ((updateData.lastName) && updateData.lastName.length <= 1) {
      console.log(updateData.lastName)
      const replaceStr = Responses.VALIDATION.MUST_BE_AT_CHARACTER.replace('XXXX', FIELD.lAST_NAME);
      const replaceChar = replaceStr.replace('CHAR_XXXX', '2')
      isError[FIELD.lAST_NAME] = replaceChar;
    }

    if (updateData.mobileNumber) {
      let mobileNumber = updateData.mobileNumber;
      if (!validator.matches(mobileNumber, /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm)) {
        const replaceStr = Responses.ERROR.INVALID_FIELD.replace('XXXX', FIELD.MOBILE_NUMBER);
        isError[`${FIELD.MOBILE_NUMBER}`] = replaceStr
      }
      if (mobileNumber.length < 10) {
        const replaceStr = Responses.VALIDATION.MUST_BE_AT_CHARACTER.replace('XXXX', FIELD.MOBILE_NUMBER);
        const replaceChar = replaceStr.replace('CHAR_XXXX', '10')
        isError[FIELD.MOBILE_NUMBER] = replaceChar;
      }
    } if (updateData.email) {
      let email = updateData.email;
      if (!validator.matches(email, /(?=.*\.)/)) {
        const replaceStr = Responses.ERROR.INVALID_FIELD.replace('XXXX', FIELD.EMAIL);
        isError[`${FIELD.EMAIL}`] = replaceStr
      }
      if (!validator.matches(email, /(?=.*\@)/)) {
        const replaceStr = Responses.ERROR.INVALID_FIELD.replace('XXXX', FIELD.EMAIL + ' must');
        isError[`${FIELD.EMAIL}`] = replaceStr
      }
    }
    if (Object.entries(isError).length !== 0) {
      throw new HttpException(isError, HttpStatus.BAD_REQUEST)
    }
  }

  public async passwordValidation(updateData, Responses, FIELD) {
    const isError = {};
    //// PASSWORD VALIDATION [START HERE]
    if (updateData.password) {
      let password = updateData.password;
      if (!validator.matches(password, /(?:(?=.*\d))/)) {
        const replaceStr = Responses.VALIDATION.MUST_HAVE_AT_CHARACTER.replace('XXXX', FIELD.PASSWORD);
        const replaceChar = replaceStr.replace('CHAR_XXXX', '1 digital')
        isError[FIELD.PASSWORD] = replaceChar
      }

      if (!validator.matches(password, /(?=.*[a-z])/)) {
        const replaceStr = Responses.VALIDATION.MUST_HAVE_AT_CHARACTER.replace('XXXX', FIELD.PASSWORD);
        const replaceChar = replaceStr.replace('CHAR_XXXX', '1 lower')
        isError[`${FIELD.PASSWORD}`] = replaceChar
      }
      if (!validator.matches(password, /(?=.*[A-Z])/)) {
        const replaceStr = Responses.VALIDATION.MUST_HAVE_AT_CHARACTER.replace('XXXX', FIELD.PASSWORD);
        const replaceChar = replaceStr.replace('CHAR_XXXX', '1 upper')
        isError[`${FIELD.PASSWORD}`] = replaceChar
      }
      if (!validator.matches(password, /(?=.*\W+)/)) {
        const replaceStr = Responses.VALIDATION.MUST_HAVE_AT_CHARACTER.replace('XXXX', FIELD.PASSWORD);
        const replaceChar = replaceStr.replace('CHAR_XXXX', '1 special')
        isError[`${FIELD.PASSWORD}`] = replaceChar
      }
      if (Object.entries(isError).length !== 0) {
        throw new HttpException(isError, HttpStatus.BAD_REQUEST)
      }
    }
    //// PASSWORD VALIDATION [END HERE]
  }

  public async ValidationInputData(createUserProfile, Responses, FIELD) {
    const { firstName, lastName, password, email, mobileNumber } = createUserProfile;
    const isError = {}
    const user = await this.userProfile.findOne({
      $or: [
        { email: email }
        , { mobileNumber: mobileNumber }
      ]
    });
    if (user) {
      if (user.mobileNumber == mobileNumber) {
        const replaceStr = Responses.ERROR.ALREADY_EXIST.replace('XXXX', "Mobile number")
        throw new HttpException(replaceStr, HttpStatus.CONFLICT)
      }
      if (user.email == email) {
        const replaceStr = Responses.ERROR.ALREADY_EXIST.replace('XXXX', "Email number")
        throw new HttpException(replaceStr, HttpStatus.CONFLICT)
      }
    }
    if (firstName?.length <= 1) {
      const replaceStr = Responses.VALIDATION.MUST_BE_AT_CHARACTER.replace('XXXX', FIELD.FIRST_NAME);
      const replaceChar = replaceStr.replace('CHAR_XXXX', '2')
      isError[FIELD.FIRST_NAME] = replaceChar;
    }
    if (lastName && lastName?.length <= 1) {
      const replaceStr = Responses.VALIDATION.MUST_BE_AT_CHARACTER.replace('XXXX', FIELD.lAST_NAME);
      const replaceChar = replaceStr.replace('CHAR_XXXX', '2')
      isError[FIELD.lAST_NAME] = replaceChar;
    }


    if (!validator.matches(mobileNumber, /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm)) {
      const replaceStr = Responses.ERROR.INVALID_FIELD.replace('XXXX', FIELD.MOBILE_NUMBER);
      isError[`${FIELD.MOBILE_NUMBER}`] = replaceStr
    }

    if (mobileNumber?.length < 10) {
      const replaceStr = Responses.VALIDATION.MUST_BE_AT_CHARACTER.replace('XXXX', FIELD.MOBILE_NUMBER);
      const replaceChar = replaceStr.replace('CHAR_XXXX', '10')
      isError[FIELD.MOBILE_NUMBER] = replaceChar;
    }

    if (!validator.matches(email, /(?=.*\.)/)) {
      const replaceStr = Responses.ERROR.INVALID_FIELD.replace('XXXX', FIELD.EMAIL);
      isError[`${FIELD.EMAIL}`] = replaceStr
    }
    if (!validator.matches(email, /(?=.*\@)/)) {
      const replaceStr = Responses.ERROR.INVALID_FIELD.replace('XXXX', FIELD.EMAIL + ' must');
      isError[`${FIELD.EMAIL}`] = replaceStr
    }
    if (Object.entries(isError).length !== 0) {
      throw new HttpException(isError, HttpStatus.BAD_REQUEST)
    }
  }
  public EnumValidationFunction(createUserProfile, Responses, FIELD, USERS) {
    const { firstName, lastName, password, email, status, profession, role } = createUserProfile;
    //if (status && !Object.values(USERS.STATUS_TYPE).includes(status)) {
    //  const replaceStr = Responses.ERROR.INVALID_FIELD.replace('XXXX', `${FIELD.STATUS_TYPE}`)
    //   throw new HttpException(`${replaceStr}`, HttpStatus.METHOD_NOT_ALLOWED)
    // }
    // if (profession && !Object.values(USERS.PROFESSION_TYPE).includes(profession)) {
    // const replaceStr = Responses.ERROR.INVALID_FIELD.replace('XXXX', `${FIELD.PROFESSION_TYPE}`)
    // throw new HttpException(`${replaceStr}`, HttpStatus.METHOD_NOT_ALLOWED)
    // }

    if (role && !Object.values(USERS.ROLE_TYPE).includes(role)) {
      const replaceStr = Responses.ERROR.INVALID_FIELD.replace('XXXX', `${FIELD.ROLE_TYPE}`)
      throw new HttpException(`${replaceStr}`, HttpStatus.METHOD_NOT_ALLOWED)
    }
  }
  private CalculateAge(dateOfBirth) {
    console.log(dateOfBirth)
    var today = new Date();
    var birthDate = new Date(dateOfBirth);
    var age = today.getFullYear() - birthDate.getFullYear();
    // console.log("age", age, today.getMonth(), birthDate.getMonth())
    // var m = today.getMonth() - birthDate.getMonth();
    // if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    // age--;
    // }

    return age;
  }
  async getMailChimpMemberByEmail(email, token, Response, Field) {
    try {
      const url = `${process.env.MAILCHIMP_SERVER}/lists/${process.env.MAILCHIMP_LIST_ID}/members/${email}`
      const getMailMember = await axios.get(url, {
        auth: {
          username: "anystring",
          password: `${process.env.MAILCHIMP_API_KEY}`
        }
      });
      return JSON.stringify(getMailMember?.data);
    }
    catch (error) {
      console.log(error);
      if (error?.response?.status === 404) {
        const replaceStr = Response.ERROR.NOT_FOUND.replace('XXXX', "email")
        throw new HttpException(replaceStr, HttpStatus.NOT_FOUND)
      }
      if (error)
        throw new HttpException(error?.response?.statusText, error?.response?.status)
    }
  }
  //// update OR ADD email into mailchimp ////
  async updateMailChimpMemberByEmail(email, status, token, Response, Field) {
    try {
      const url = `${process.env.MAILCHIMP_SERVER}/lists/${process.env.MAILCHIMP_LIST_ID}/members/${email}`;
      const body = {
        "status": status,
        "email_address": email,
      }
      const getMailMember = await axios.put(url, JSON.stringify(body), {
        auth: {
          username: "anystring",
          password: `${process.env.MAILCHIMP_API_KEY}`
        }
      });
      return JSON.stringify(getMailMember?.data);
    }
    catch (error) {
      console.log("errorssss", error);
      if (error?.response?.status === 400) {
        throw new HttpException("E-mail ziet er nep of ongeldig uit, voer een echt e-mailadres in.", error?.response?.status)
      }
      if (error)
        throw new HttpException(error?.response?.statusText, error?.response?.status)
    }
  }
  async documentQueues(userId) {
    try {
      const job = await this.documentQueue.add('documentsCopyintoAnotherContainer-job', {
        userId,
      });
      return true;
    }
    catch (error) {
      console.log("error", error)
    }
  }

  async removeVlogQueues(userId) {
    try {
      let findVlogData = await this.VlogObject.find({ userId });
      let containerName = process.env.USER_VLOG_CONTAINER || "uservlogs";
      for (let key in findVlogData) {
        let vlogBlobId = findVlogData[key]?.vlogVideo;
        if (vlogBlobId) {
          const job = await this.documentQueue.add('removeVlogFromUserContainer-job', {
            blobId: vlogBlobId,
            containerName: containerName,
          });
        }
      }
      return true;
    }
    catch (error) {
      console.log("error", error)
    }
  }
  async moveDocuments(userId) {
    try {
      const documents = await this.Documents.find({ userId });
      if (documents.length < 0) {
        throw new HttpException("Vlog Not Found", HttpStatus.NOT_FOUND)
      }

      const sasToken = await this.generateSASKey();
      let response;
      for (let key in documents) {
        let fileName = documents[key].blobId;
        const mainContainer = process.env.USER_DOCS_CONTAINER;
        const newContainer = process.env.ARCHIVED_USER_DOCS_CONTAINER;
        const url = `https://${CONFIG.STORAGE_ACCOUNT_NAME}.blob.core.windows.net/${mainContainer}/${fileName}?${sasToken?.accessToken}`;
        response = await this.moveDocumentAzureBlob(url, fileName, mainContainer, newContainer);
      }
      return response;

    }
    catch (error) {
      console.log("error", error)
    }
  }

  getBlobClient(fileName: string, containerName): BlockBlobClient {
    const blobClientService = BlobServiceClient.fromConnectionString(process.env.AZURE_CONNECTION);
    const containerClient = blobClientService.getContainerClient(containerName);
    const blobClient = containerClient.getBlockBlobClient(fileName);
    return blobClient;
  }

  async moveDocumentAzureBlob(url, filename, mainContainer, newContainer) {
    try {
      const blobClient = this.getBlobClient(filename, newContainer);
      const copyFile = await blobClient.syncCopyFromURL(url);
      if (copyFile?.copyStatus === 'success') {
        const findClient = this.getBlobClient(filename, mainContainer);
        const deleteFile = await findClient.deleteIfExists();
        if (deleteFile?.succeeded == true) {
          return "successed"
        }
      }
    } catch (error) {
      console.log("error", error)
    }

  }

  async deleteVlogBlobAzureBlob(filename, containerName) {
    try {
      const findClient = this.getBlobClient(filename, containerName);
      console.log("delete file", findClient)
      const deleteFile = await findClient.deleteIfExists();
      console.log("delete file ", deleteFile)
      if (deleteFile?.succeeded == true) {
        // conso
        return "successed"
      }
    } catch (error) {
      console.log("error", error)
    }

  }
  async downloaderFile(url, fileName, callback) {
    const response = await axios({
      method: 'get',
      url: url,
      responseType: 'stream'
    });
    const downloadStream = await new Promise((resolve, reject) => {

      const file = fs.createWriteStream(`./tmp/${fileName}`);
      response.data.pipe(file);

      file.on("error", (error) => {
        return reject(`There was an error writing the file. Details: $ {error}`);
      });

      file.on('finish', () => {
        file.close();
      });

      file.on('end', () => {
        file.close();
      });
      file.on('close', () => {
        return resolve(fileName);
      });

    })
      .catch(function (error) {
        // handle error
        console.log(error);
        callback(false);
      })
      .then(function (filename) {
        callback(true);
      })

  }
  async create(createUserProfile: UserDto, token, Responses, FIELD, USERS): Promise<User> {

    try {
      delete createUserProfile['password'];
      if (createUserProfile?.profileCompletion) {
        delete createUserProfile['profileCompletion'];
      }
      const decodeTokenData: TokenInput = jwt_decode(token);
      createUserProfile._id = decodeTokenData.sub;
      createUserProfile['createdById'] = decodeTokenData.sub;
      const newUser = new this.userProfile(createUserProfile);
      newUser.profileCompletion = `${20}`;
      const save = await newUser.save();
      return save;
    } catch (error) {
      if (error.code === 11000) {
        if (error.keyValue?.mobileNumber) {
          console.log("mobile ", error.keyValue?.mobileNumber)
          const replaceStr = Responses.ERROR.ALREADY_EXIST.replace('XXXX', "Mobile number")
          throw new HttpException(replaceStr, HttpStatus.CONFLICT)
        }
        if (error.keyValue?.email) {
          const replaceStr = Responses.ERROR.ALREADY_EXIST.replace('XXXX', "Email")
          throw new HttpException(replaceStr, HttpStatus.CONFLICT)
        }
        if (error.keyValue?._id) {
          const replaceStr = Responses.ERROR.ALREADY_EXIST.replace('XXXX', "User")
          throw new HttpException(replaceStr, HttpStatus.CONFLICT)
        }
        else {
          const replaceStr = Responses.ERROR.ALREADY_EXIST.replace('XXXX', "User")
          throw new HttpException(replaceStr, HttpStatus.CONFLICT)
        }
      }
      throw new HttpException(Responses.ERROR.ERROR_VALUE, error);
    }
  }

  // UPDATE USER
  async update(_id: string, updateUser, token, Responses, FIELD, USER) {
    try {
      delete updateUser['password'];
      console.log("update", updateUser)
      if (updateUser?.profileCompletion) {
        delete updateUser['profileCompletion'];
      }
      const decodeTokenData: TokenInput = jwt_decode(token);
      const userProfileData = await this.userProfile.findById(_id);
      if (!userProfileData) {
        const replaceStr = Responses.ERROR.NOT_FOUND.replace('XXXX', "User")
        throw new HttpException(replaceStr, HttpStatus.NOT_FOUND);
      }

      if (updateUser['password'] != 'undefined')
        delete updateUser['passowrd'];

      if (updateUser['oldPassword'] != 'undefined')
        delete updateUser['oldPassword'];


      if (decodeTokenData.realm_access.roles.includes('admin')) {
        updateUser['updatedById'] = decodeTokenData.sub;
        updateUser['updatedBy'] = 'admin';
        if (updateUser.profilePicturePath && userProfileData?.profileCompletion == "20") {
          updateUser.profileCompletion = Number(userProfileData.profileCompletion) + 5 + 25;
        } else if (userProfileData?.profileCompletion === "20") {
          updateUser.profileCompletion = Number(userProfileData.profileCompletion) + 25;
        }
        const data = await this.userProfile.findByIdAndUpdate(_id, updateUser, { new: true });
        return data;
      }
      if (decodeTokenData.sub !== userProfileData._id) {
        throw new HttpException(Responses.ERROR.FORBIDDEN, HttpStatus.FORBIDDEN);
      }

      if (decodeTokenData.realm_access.roles.includes('client')) {
        updateUser['updatedBy'] = 'client';
      }
      if (decodeTokenData.realm_access.roles.includes('enduser')) {
        updateUser['updatedBy'] = 'enduser';
      }
      updateUser['updatedById'] = decodeTokenData.sub;
      if (updateUser.profilePicturePath && userProfileData?.profileCompletion === "20") {
        updateUser.profileCompletion = Number(userProfileData.profileCompletion) + 5 + 25;
      } else if (userProfileData?.profileCompletion === "20") {
        updateUser.profileCompletion = Number(userProfileData.profileCompletion) + 25;
      }
      const data = this.userProfile.findByIdAndUpdate(_id, updateUser, { new: true });
      return data;
    } catch (error) {
      if (error.code === 11000) {
        if (error.keyValue?.mobileNumber) {
          console.log("mobile ", error.keyValue?.mobileNumber)
          const replaceStr = Responses.ERROR.ALREADY_EXIST.replace('XXXX', "Mobile number")
          throw new HttpException(replaceStr, HttpStatus.CONFLICT)
        }
        if (error.keyValue?.email) {
          const replaceStr = Responses.ERROR.ALREADY_EXIST.replace('XXXX', "Email number")
          throw new HttpException(replaceStr, HttpStatus.CONFLICT)
        }
        if (error.keyValue?._id) {
          const replaceStr = Responses.ERROR.ALREADY_EXIST.replace('XXXX', "User")
          throw new HttpException(replaceStr, HttpStatus.CONFLICT)
        }
        else {
          const replaceStr = Responses.ERROR.ALREADY_EXIST.replace('XXXX', "User")
          throw new HttpException(replaceStr, HttpStatus.CONFLICT)
        }
      }
      if (error.status === 400) {
        throw new HttpException(error.response, error.status)
      }
      if (error) {
        throw new HttpException(error.response, error.status)
      }
      throw new HttpException(Responses.ERROR.ERROR_VALUE, error);
    }
  }
  //// update USER [End here] ////


  // async updatePassword(_id: string, updateUser, token, Responses, FIELD, USER) {
  //   try {
  //     const decodeTokenData: TokenInput = jwt_decode(token);
  //     const userProfileData = await this.userProfile.findById(_id);
  //     if (!userProfileData) {
  //       const replaceStr = Responses.ERROR.NOT_FOUND.replace('XXXX', "User")
  //       throw new HttpException(replaceStr, HttpStatus.NOT_FOUND);
  //     }

  //     if (updateUser?.oldPassword) {
  //       const findUser = await this.userProfile.findById({ _id: _id });
  //       if (findUser?.password !== updateUser.oldPassword) {
  //         throw new HttpException(Responses.ERROR.OLD_PASSWORD_INCORRECT, HttpStatus.NOT_ACCEPTABLE);
  //       }
  //     }
  //     else if (updateUser?.password) {
  //       throw new HttpException(Responses.ERROR.ADD_CURRENT_PASSWORD, HttpStatus.NOT_ACCEPTABLE)
  //     }


  //     if (decodeTokenData.realm_access.roles.includes('admin')) {
  //       userProfileData['updatedById'] = decodeTokenData.sub;
  //       userProfileData['password'] = updateUser['password'];
  //       const data = await this.userProfile.findByIdAndUpdate(_id, userProfileData, { new: true });
  //       delete data['password'];
  //       return data;
  //     }

  //     if (decodeTokenData.sub !== userProfileData._id) {
  //       throw new HttpException(Responses.ERROR.FORBIDDEN, HttpStatus.FORBIDDEN);
  //     }



  //     userProfileData['updatedById'] = decodeTokenData.sub;
  //     userProfileData['password'] = updateUser['password'];
  //     const data = this.userProfile.findByIdAndUpdate(_id, userProfileData, { new: true });
  //     delete data['password'];
  //     return data;
  //   } catch (error) {
  //     if (error.status === 400) {
  //       throw new HttpException(error.response, error.status)
  //     }
  //     if (error) {
  //       throw new HttpException(error.response, error.status)
  //     }

  //     throw new HttpException(Responses.ERROR.ERROR_VALUE, error);
  //   }
  // }
  //// update USER [End here] ////


  //// UPDATE USER STATUS ONLY FOR ADMIN /////
  async updateUserStatus(_id, isDeleted, token, Responses, FIELDS, USERS) {
    try {
      if (!Object.keys(USERS.IS_DELETED_ENUM).includes(`${isDeleted}`)) {
        const replaceStr = Responses.ERROR.INVALID_FIELD.replace('XXXX', `${FIELDS.DELETE_TYPE}`)
        throw new HttpException(`${replaceStr}`, HttpStatus.METHOD_NOT_ALLOWED)
      }
      const userProfileData = await this.userProfile.findById(_id);
      if (!userProfileData) {
        const replaceStr = Responses.ERROR.NOT_FOUND.replace('XXXX', "User")
        throw new HttpException(replaceStr, HttpStatus.NOT_FOUND);
      }
      const decodeTokenData: TokenInput = jwt_decode(token);
      userProfileData['updatedById'] = decodeTokenData.sub;
      userProfileData.isDeleted = isDeleted;
      //
      const keycloakUserStatus = `${process.env.KEYCLOAK_HOST}/auth/admin/realms/${process.env.KEYCLOAK_REALM}/users/${_id}`
      let enableStatus;
      if (isDeleted == '0' || isDeleted == 0) {
        enableStatus = true;
      } else {
        enableStatus = false;
      }
      const body = `{"enabled":${enableStatus}}`;
      const response = await this.httpService
        .put(keycloakUserStatus, body, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
          },
        })
        .toPromise();
      console.log('response data ', response);
      const data = await this.userProfile.findByIdAndUpdate(_id, userProfileData, { new: true });
      console.log("data", data)
      return data;

    }
    catch (error) {
      console.log("error", error)
      if (error.status === 404) {
        const replaceStr = Responses.ERROR.NOT_FOUND.replace('XXXX', "User")
        throw new HttpException(replaceStr, HttpStatus.NOT_FOUND);
      }
      if (error) {
        throw new HttpException(error.response, error.status)
      }
    }
  }

  async RemoveMultipleUsers(userIdList, isDeleted, token, Responses, FIELDS, USERS) {
    try {
      console.log("users", USERS)
      if (!Object.keys(USERS.IS_DELETED_ENUM).includes(`${isDeleted}`)) {
        const replaceStr = Responses.ERROR.INVALID_FIELD.replace('XXXX', `${FIELDS.DELETE_TYPE}`)
        throw new HttpException(`${replaceStr}`, HttpStatus.METHOD_NOT_ALLOWED)
      }

      const decodeTokenData: TokenInput = jwt_decode(token);

      // if (decodeTokenData.realm_access.roles.includes('admin')) {
      // return userProfileData;
      // }
      // if (decodeTokenData.sub !== userProfileData._id) {
      // throw new HttpException(Responses.ERROR.FORBIDDEN, HttpStatus.FORBIDDEN);
      // }
      console.log("users multiple delete called", userIdList)

      const deletedData = await this.userProfile.updateMany({ _id: { $in: userIdList } }, { $set: { isDeleted: isDeleted } });
      const findAllUser = await this.userProfile.find({ _id: { $in: userIdList } })
      return findAllUser;
    } catch (err) {
      console.log(err);
      if (err.status === 405) {
        throw new HttpException(err.response, err.status)
      }
      throw new HttpException(Responses.ERROR.ERROR_VALUE, err);
    }
  }

  async getUsersByIdList(userIdList, token, Responses, FIELDS, USERS) {
    try {

      const decodeTokenData: TokenInput = jwt_decode(token);
      const findAllUser = await this.userProfile.find({ _id: { $in: userIdList } })
      if (findAllUser.length < 1) {
        const replaceStr = Responses.ERROR.NOT_FOUND.replace('XXXX', "User")
        throw new HttpException(replaceStr, HttpStatus.NOT_FOUND);
      }
      //for display only temporary basis
      for (let i = 0; i < findAllUser.length; i++) {
        if (!findAllUser[i].profileCompletion) {
          findAllUser[i].profileCompletion = `${50}`;
        }
      }

      return findAllUser;
    } catch (err) {
      console.log(err);
      if (err.status === 405) {
        throw new HttpException(err.response, err.status)
      }
      throw new HttpException(err.response || err.message, err.status || err.code);
    }
  }
  // client can access only some fields of enduser
  async getUserData(_id, token, Responses) {
    try {
      const userProfileData = await this.userProfile.findById(_id);
      if (!UserprofileInput) {
        const replaceStr = Responses.ERROR.NOT_FOUND.replace('XXXX', 'User')
        throw new HttpException(replaceStr, HttpStatus.NOT_FOUND);
      }
      const decodeTokenData: TokenInput = jwt_decode(token);
      if (decodeTokenData.sub !== userProfileData._id) {
        userProfileData.dateOfBirth = null;
        return userProfileData;
      }
      //for display only temporary basis
      if (!userProfileData.profileCompletion) {
        userProfileData.profileCompletion = `${50}`;
      }
      return userProfileData;
    } catch (err) {
      throw new HttpException(Responses.ERROR.ERROR_VALUE, err);
    }
  }

  async getAllUser(perPage, pageNum, sort, roleIdList, Responses, deletionList) {
    try {
      // {$and:[{ role : { $in : roleIdList }},
      const allUserData = await this.userProfile.find({ $and: [{ role: { $in: roleIdList } }, { isDeleted: { $in: deletionList } }] }).limit(perPage).skip(perPage * pageNum)
        .sort({
          '_id': sort === "asc" ? 1 : sort === 'desc' ? -1 : 1
        });
      if (allUserData.length < 1 || allUserData.length === undefined) {
        const replaceStr = Responses.ERROR.NOT_FOUND.replace('XXXX', 'Data')
        throw new HttpException(replaceStr, HttpStatus.NOT_FOUND);
      }
      for (let i = 0; i < allUserData.length; i++) {
        if (!allUserData[i].profileCompletion) {
          allUserData[i].profileCompletion = `${50}`;
        }
      }

      const totalCount = await this.userProfile.find({ $and: [{ role: { $in: roleIdList } }, { isDeleted: { $in: deletionList } }] }).countDocuments();

      const totalUserAndTotalCount = {
        data: allUserData,
        totalCount,
      }
      return totalUserAndTotalCount;
    } catch (err) {
      console.log(err);
      throw new HttpException(Responses.ERROR.ERROR_VALUE, err);
    }
  }

  async address(_id) {
    const userData = await this.userProfile.findOne({ _id: _id });
    return userData;
  }
  async vlogDescription(_id) {
    const vlogData = await this.VlogObject.findOne({ userID: _id })
    return vlogData?.vlogDescription || null;
  }

  async username(_id) {
    const userData = await this.userProfile.findOne({ _id: _id })
    return `${userData?.firstName} ${userData?.lastName}`;
  }

  async applicantAge(_id) {
    const userData = await this.userProfile.findOne({ _id: _id })
    console.log("user", userData)
    const age = this.CalculateAge(userData.dateOfBirth)
    console.log("age", age)
    return age

  }
  async remove(_id: string, token, Responses) {
    try {
      const userProfileData = await this.userProfile.findById(_id);
      if (!userProfileData) {
        const replaceStr = Responses.ERROR.NOT_FOUND.replace('XXXX', 'User')
        throw new HttpException(replaceStr, HttpStatus.NOT_FOUND);
      }

      const decodeTokenData: TokenInput = jwt_decode(token);

      // if (decodeTokenData.realm_access.roles.includes('admin')) {
      // return userProfileData;
      // }
      if (decodeTokenData.sub !== userProfileData._id) {
        throw new HttpException(Responses.ERROR.FORBIDDEN, HttpStatus.FORBIDDEN);
      }

      const deletedData = await this.userProfile.findByIdAndDelete(_id);
      return deletedData;
    } catch (err) {
      console.log(err);
      throw new HttpException(Responses.ERROR.ERROR_VALUE, err);
    }
  }

  async findbyid(_id, token, Responses) {
    try {
      const userdata = await this.userProfile.findById(_id);
      if (!userdata) {
        const replaceStr = Responses.ERROR.NOT_FOUND.replace('XXXX', 'User')
        throw new HttpException(replaceStr, HttpStatus.NOT_FOUND);
      }

      const decodeTokenData: TokenInput = jwt_decode(token);
      if (decodeTokenData.realm_access.roles.includes('admin')) {
        return userdata;
      }
      ////!important data for security 
      // if (decodeTokenData.sub !== userdata._id) {
      //   throw new HttpException(Responses.ERROR.FORBIDDEN, HttpStatus.FORBIDDEN);
      // }
      return userdata;
    } catch (error) {
      console.log(error);
      throw new HttpException(error, error);
    }
  }

  async findbyemail(email, token, Responses) {
    try {
      const userdata = await this.userProfile.findOne({ email: email });
      if (!userdata) {
        const replaceStr = Responses.ERROR.NOT_FOUND.replace('XXXX', 'User')
        throw new HttpException(replaceStr, HttpStatus.NOT_FOUND);
      }
      const decodeTokenData: TokenInput = jwt_decode(token);

      if (decodeTokenData.realm_access.roles.includes('admin')) {
        return userdata;
      }

      if (decodeTokenData.sub !== userdata._id) {
        throw new HttpException(Responses.ERROR.FORBIDDEN, HttpStatus.FORBIDDEN);
      }
      return userdata;
    } catch (error) {
      console.log(error);
      throw new HttpException(Responses.ERROR.ERROR_VALUE, error);
    }
  }

  async findbymobilenumber(number, token, Responses) {
    try {
      const userdata = await this.userProfile.findOne({ mobileNumber: number });
      if (!userdata) {
        const replaceStr = Responses.ERROR.NOT_FOUND.replace('XXXX', 'User')
        throw new HttpException(replaceStr, HttpStatus.NOT_FOUND);
      }
      const decodeTokenData: TokenInput = jwt_decode(token);

      if (decodeTokenData.realm_access.roles.includes('admin')) {
        return userdata;
      }

      if (decodeTokenData.sub !== userdata._id) {
        throw new HttpException(Responses.ERROR.FORBIDDEN, HttpStatus.FORBIDDEN);
      }
      return userdata;
    } catch (error) {
      console.log(error);
      throw new HttpException(Responses.ERROR.ERROR_VALUE, error);
    }
  }

  async findbyprofessionID(professionID, token, Responses) {
    try {
      const userdata = await this.userProfile.findOne({
        professionID: professionID,
      });
      if (!userdata) {
        const replaceStr = Responses.ERROR.NOT_FOUND.replace('XXXX', 'User')
        throw new HttpException(replaceStr, HttpStatus.NOT_FOUND);
      }
      const decodeTokenData: TokenInput = jwt_decode(token);
      if (decodeTokenData.realm_access.roles.includes('admin')) {
        return userdata;
      }

      if (decodeTokenData.sub !== userdata._id) {
        throw new HttpException(Responses.ERROR.FORBIDDEN, HttpStatus.FORBIDDEN);
      }
      return userdata;
    } catch (error) {
      console.log(error);
      throw new HttpException(Responses.ERROR.ERROR_VALUE, error);
    }
  }

  async getTotalUserCountForisActive(token, languages) {
    const totalUserCount = await this.userProfile.find({ isDeleted: "0", $or: [{ status: 1 }, { status: null }], }).count();
    return totalUserCount;
  }

  //// KEYCLOAK LOGIN /// REGISTRATION [Start here ] /////
  async accessToken(UserData) {
    try {
      console.log("user data", UserData)
      const response = await this.httpService
        .post(this.KeycloakUrl, qs.stringify(UserData), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
        .toPromise();
      console.log('response data', response.data);
      return response.data;
    } catch (err) {
      console.log(err);
      throw new HttpException('Error', err);
    }
  }

  async accessTokenWithOutCredientials(UserData) {
    // const url =
    //   'http://localhost:8080/auth/realms/vlogmakelaars/protocol/openid-connect/token';
    const url = `${process.env.KEYCLOAK_HOST}/auth/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/token`;
    try {
      const response = await this.httpService
        .post(url, qs.stringify(UserData), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
        .toPromise();
      return response.data;
    } catch (err) {
      console.log(err);
      throw new HttpException('Error', err);
    }
  }
  async createUserWithKeycloak(UserData, role, AuthHeader, Responses) {
    const decodeTokenData: TokenInput = jwt_decode(AuthHeader);
    if (!decodeTokenData.realm_access.roles.includes('admin')) {
      throw new HttpException("Forbidden", HttpStatus.FORBIDDEN)
    }
    //step 1:create keycloak user
    const keycloakAllUser = `${process.env.KEYCLOAK_HOST}/auth/admin/realms/${process.env.KEYCLOAK_REALM}/users`
    if (role == 'admin') {
      UserData.attributes.roles = "admin";
    }
    const data = JSON.stringify(UserData);
    try {
      const response = await this.httpService
        .post(keycloakAllUser, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${AuthHeader}`,
          },
        })
        .toPromise();
      console.log('response data ', response);
      if (response.status === 201) {
        const findRealmRole = `${process.env.KEYCLOAK_HOST}/auth/admin/realms/${process.env.KEYCLOAK_REALM}/roles`;
        const resp = await this.httpService
          .get(findRealmRole, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `${AuthHeader}`,
            },
          })
          .toPromise();
        var kRealmRole = resp.data.find((roles, index) => {
          console.log("roles", roles)
          return JSON.stringify(roles.name.toLowerCase()) === JSON.stringify(role.toLowerCase())
        })
        //step 4: find clients in keycloak
        const findClient = `${process.env.KEYCLOAK_HOST}/auth/admin/realms/${process.env.KEYCLOAK_REALM}/clients`
        const respo = await this.httpService
          .get(findClient, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `${AuthHeader}`,
            },
          })
          .toPromise();
        var cl;
        if (role.toLocaleLowerCase() == 'admin') {
          cl = 'realm-management'
        } else {
          cl = `${process.env.KEYCLOAK_CLIENT_ID}`;
        }
        var kClient = respo.data.find((clients, index) => clients.clientId === cl)
        //step 5:find client roles in keycloak
        var cr;
        if (role.toLocaleLowerCase() == 'admin') {
          cr = 'realm-admin';
        } else {
          cr = `${role.toLocaleLowerCase()}`;
        }
        const findClientRoles = `${process.env.KEYCLOAK_HOST}/auth/admin/realms/${process.env.KEYCLOAK_REALM}/clients/${kClient.id}/roles`
        const respon = await this.httpService
          .get(findClientRoles, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `${AuthHeader}`,
            },
          })
          .toPromise();
        console.log("cr2", cr.toLowerCase())
        var kClientRoles = respon.data.find((roles, index) => {
          return roles.name.toLowerCase() === cr
        }
        )
        const loginData = {
          username: UserData.username,
          password: UserData.credentials[0].value,
          grant_type: "password",
          client_id: `${process.env.KEYCLOAK_CLIENT_ID}`,
          client_secret: `${process.env.KEYCLOAK_CLIENT_SECRET}`,
        }
        const loginUser = await this.accessToken(loginData)
        let decodeToken: any;
        if (loginUser.access_token) {
          decodeToken = jwt_decode(loginUser.access_token)
        }
        //step 6:set realm roles to user in keycloak
        const SetRealmRole = `${process.env.KEYCLOAK_HOST}/auth/admin/realms/${process.env.KEYCLOAK_REALM}/users/${decodeToken.sub}/role-mappings/realm`
        let str1 = `[{
          "id":"${kRealmRole.id}",
          "name":"${kRealmRole.name}"
          }]`
        const reaction = await this.httpService
          .post(SetRealmRole, str1, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `${AuthHeader}`,
            },
          })
          .toPromise();
        if (reaction?.status == 204) {
          console.log("Realm Role Set!");
        }
        //step 7: set client roles to user in keycloak
        var scr;
        if (role.toLocaleLowerCase() == 'admin') {
          scr = "realm-admin"
        } else {
          scr = kClientRoles.name;
        }
        const SetClientRole = `${process.env.KEYCLOAK_HOST}/auth/admin/realms/${process.env.KEYCLOAK_REALM}/users/${decodeToken.sub}/role-mappings/clients/${kClient.id}`
        let str2 = `[{
        "id":"${kClientRoles.id}",
        "name":"${scr}",
        "clientRole":"true"
        }]`
        const react = await this.httpService
          .post(SetClientRole, str2, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `${AuthHeader}`,
            },
          })
          .toPromise();
        if (react?.status == 204) {
          return Responses.SUCCESS.SUCCESSFULLY_CREATED_USER_WITH_ROLES;
        }
        return Responses.SUCCESS.SUCCESSFULLY_CREATE_USER_WITHOUT_ROLES;
      }
      // return response.data;
    } catch (error) {
      console.log("errors 1", error)
      if (error) {
        throw new HttpException(error.response?.data?.errorMessage || "error", error?.response?.status || HttpStatus.INTERNAL_SERVER_ERROR);
      }
      else {
        throw new HttpException('error', error);
      }
    }
  }

  async UpdateKeycloakUser(updateUser, token, userId) {
    const keycloakUpdateURL = `${process.env.KEYCLOAK_HOST}/auth/admin/realms/${process.env.KEYCLOAK_REALM}/users/${userId}`

    if (!updateUser?.attributes?.roles) {
      updateUser = {
        ...updateUser,
        attributes: {
          ...updateUser?.attributes,
          roles: "admin"
        }
      }
    }
    let body = JSON.stringify(updateUser);

    try {
      const response = await this.httpService
        .put(keycloakUpdateURL, body, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
          },
        })
        .toPromise();
      if (response.status === 204) {
        return "update successfully"
      }
      return response.data;
    } catch (err) {
      console.log("err", err.response)
      if (err) {
        throw new HttpException(err.response.statusText, err.response.status);
      }
      throw new HttpException('Error', err);
    }
  }
  async keycloakUploadPhoto(photoInfo, AuthHeader) {
    const url = `${process.env.KEYCLOAK_HOST}/auth/admin/realms/Keycloak/users/${photoInfo.keycloakId}`;
    try {
      const response = await this.httpService
        .put(url, `{
          "attributes":{
          "profileImage":"${photoInfo.profileImage}"
          }
          }`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${AuthHeader}`,
          },
        })
        .toPromise();
      console.log('response data ', response);
      if (response.status === 201) {
        return {
          data: {
            keycloakId: `${photoInfo.keycloakId}`,
            profileImage: `${photoInfo.profileImage}`
          }
        };
      }
      return {
        keycloakId: `${photoInfo.keycloakId}`,
        profileImage: `${photoInfo.profileImage}`
      };
    } catch (err) {
      throw new HttpException('Error', err);
    }
  }

  //// KEYCLOAK LOGIN /// REGISTRATION [Start here ] /////
  async generateSASKey() {
    var startDate = new Date();
    let expiryDate = new Date();
    expiryDate.setTime(startDate.getTime() + (60 * 60 * 1000));
    var AccountSasConstants = storage.Constants.AccountSasConstants;
    var sharedAccessPolicy = {
      AccessPolicy: {
        Services: AccountSasConstants.Services.BLOB,
        ResourceTypes: AccountSasConstants.Resources.SERVICE +
          AccountSasConstants.Resources.CONTAINER +
          AccountSasConstants.Resources.OBJECT,
        Permissions: AccountSasConstants.Permissions.READ +
          AccountSasConstants.Permissions.ADD +
          AccountSasConstants.Permissions.CREATE +
          AccountSasConstants.Permissions.WRITE +
          AccountSasConstants.Permissions.DELETE +
          AccountSasConstants.Permissions.LIST,
        Protocols: AccountSasConstants.Protocols.HTTPSORHTTP,
        Start: startDate,
        Expiry: expiryDate
      }

    };

    const accountname = process.env.AZURE_BLOB_ACCOUNT_NAME;
    const key = process.env.AZURE_BLOB_KEY;
    var sas = storage.generateAccountSharedAccessSignature(accountname, key, sharedAccessPolicy);
    return {
      accessToken: sas,
      startDate,
      expiryDate,
    };
  }

  async getSaSTokenBYFileName(containerName, fileName, token, lanaguages) {
    var startDate = new Date();
    let expiryDate = new Date();
    expiryDate.setTime(startDate.getTime() + (60 * 60 * 1000));

    const accountname = process.env.AZURE_BLOB_ACCOUNT_NAME;
    const key = process.env.AZURE_BLOB_KEY;
    var blobService = storage.createBlobService(accountname, key);
    var sharedAccessPolicy = {
      AccessPolicy: {
        Permissions: storage.BlobUtilities.SharedAccessPermissions.READ,
        Start: startDate,
        Expiry: expiryDate
      }
    };

    var token = blobService.generateSharedAccessSignature(containerName, fileName, sharedAccessPolicy);
    var sasUrl = blobService.getUrl(containerName, fileName, token);
    return {
      accessToken: token,
      sasUrl,
      startDate,
      expiryDate,
    };
  }


  async userSchema() {

    try {
      let array = [];
      const keyify = (obj, prefix = 'User.') =>
        Object.keys(obj).reduce((res, key) => {
          if (key == 'type' || key == 'required' || key == 'unique' || key == 'default' || key == 'auto' || key == 'getters' || key == 'path' || key == '__v' || key == 'id' || key == 'index') {
            return [...res, prefix];
          }

          if (typeof obj[key] === 'object') {
            return [...res, ...keyify(obj[key], prefix + key + '.')];
          }

          return [...res, prefix + key];
        }, []);
      const schema: any = UserProfileSchema;
      const data = keyify(schema.tree);

      const removeDuplicateData = [...new Set(data)];
      const replaceStrArray = removeDuplicateData.map((elem: string) => elem.replace('.0', ''));

      const removeLastIndex = replaceStrArray.map((elem: string) => elem.slice(-1) === '.' ? elem.slice(0, -1) : elem);
      return JSON.stringify(removeLastIndex);
    }
    catch (err) {
      console.log(err)
    }
  }
  async searchFilter(search, role, status, isDeleted, sortColumn, Responses, Fields, perPage, pageNum, sort) {

    try {
      console.log(" sortColumn", sortColumn)
      const parseSearchRegex = new RegExp(search, 'i');
      const parseRoleRegex = new RegExp(role, 'i');
      const parseStatusRegex = new RegExp(status, 'i');

      const userFilterData = await this.userProfile.find(
        {
          "$and":
            [
              search ? {
                "$or": [
                  { "firstName": { "$regex": parseSearchRegex } },
                  { "lastName": { "$regex": parseSearchRegex } },
                  { "email": { "$regex": parseSearchRegex } },
                  { "profileCompletion": { "$regex": parseSearchRegex } },
                  { $where: `${parseSearchRegex}.test(this.profession)` },
                ]
              } : {},
              role !== undefined ? { role: { $in: role } } : {},
              status !== undefined ? { $where: `${parseStatusRegex}.test(this.status)` } : {},
              isDeleted !== undefined ? { isDeleted: { $in: isDeleted } } : {}
            ]
        },
      )
        .collation({ locale: "en", numericOrdering: true }) /// for case in-sensitive and  string that contains numeric value
        .limit(perPage).skip(perPage * pageNum)
        .sort(
          sortColumn === undefined ?
            {
              '_id': sort === "asc" ? 1 : sort === 'desc' ? -1 : 1
            } :
            sortColumn
        );
      if (userFilterData.length < 1) {
        const replaceStr = Responses.ERROR.NOT_FOUND.replace('XXXX', `${Fields.USER}`)
        throw new HttpException(
          replaceStr,
          HttpStatus.NOT_FOUND,
        );
      }
      const totalCount = await this.userProfile.find(
        {
          "$and":
            [
              search ? {
                "$or": [
                  { "firstName": { "$regex": parseSearchRegex } },
                  { "lastName": { "$regex": parseSearchRegex } },
                  { "email": { "$regex": parseSearchRegex } },
                  { "profileCompletion": { "$regex": parseSearchRegex } },
                  { $where: `${parseSearchRegex}.test(this.profession)` },
                ]
              } : {},
              role !== undefined ? { role: { $in: role } } : {},
              status !== undefined ? { $where: `${parseStatusRegex}.test(this.status)` } : {},
              isDeleted !== undefined ? { isDeleted: { $in: isDeleted } } : {}
            ]
        },
      ).count();

      return {
        data: userFilterData,
        totalCount: totalCount,
      };

    }
    catch (error) {
      console.log("error", error)
      if (error) {
        throw new HttpException(error.response || error.message, error.status)
      }
    }
  }

  async createEmailSubscriber(createEmail, Response, Field, Language) {
    try {
      if (createEmail?.status === true || createEmail?.status === false) {
        createEmail.status = true;
      }
      const findEmail = await this.emailSubscriber.findOne({ email: createEmail.email });
      if (findEmail) {
        const replaceStr = Response.ERROR.ALREADY_EXIST.replace('XXXX', "E-mail")
        throw new HttpException(replaceStr, HttpStatus.CONFLICT);
      }
      const email = new this.emailSubscriber(createEmail);
      const emailSave = await email.save();
      return emailSave;

    }
    catch (error) {
      console.log(error)
      if (error)
        throw new HttpException(error?.response, error?.status)
    }
  }

  async updateEmailSubscriber(UpdateEmail, Response, Field, Language) {
    try {

      const findEmail = await this.emailSubscriber.findOne({ _id: UpdateEmail?._id });
      console.log("findOne", findEmail)
      if (!findEmail) {
        const replaceStr = Response.ERROR.NOT_FOUND.replace('XXXX', Field.DATA)
        throw new HttpException(replaceStr, HttpStatus.NOT_FOUND);
      }
      const updateEmailSub = await this.emailSubscriber.findByIdAndUpdate(UpdateEmail?._id, UpdateEmail, { new: true });
      return updateEmailSub;

    }
    catch (error) {
      console.log(error)
      if (error)
        throw new HttpException(error?.response, error?.status)
    }
  }

  async findEmailSubscribers(filters, perPage, pageNum, sort, Response, Field, Language) {
    try {
      console.log("subscription type", filters?.subscriptionType)

      const findEmail = await this.emailSubscriber.find(
        {
          $and: [
            filters?.email ? { email: filters?.email } : {},
            filters?.subscriptionType ? { subscriptionType: filters?.subscriptionType } : {}]
        }).limit(perPage).skip(perPage * pageNum)
        .sort({
          '_id': sort === "asc" ? 1 : sort === 'desc' ? -1 : 1
        });
      console.log("find data", findEmail)
      if (findEmail.length < 0) {
        const replaceStr = Response.ERROR.NOT_FOUND.replace('XXXX', Field.DATA)
        throw new HttpException(replaceStr, HttpStatus.NOT_FOUND);
      }
      const totalCount = await this.emailSubscriber.find({
        $and: [
          filters?.email ? { email: filters?.email } : {},
          filters?.subscriptionType ? { subscriptionType: filters?.subscriptionType } : {}]
      }).countDocuments();

      return {
        data: findEmail,
        totalCount,
      }
    }
    catch (error) {
      console.log(error)
      if (error)
        throw new HttpException(error?.response, error?.status)
    }
  }



}
