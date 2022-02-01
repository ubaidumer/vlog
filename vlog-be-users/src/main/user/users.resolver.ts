import {
  Resolver,
  Query,
  Args,
  Int,
  Mutation,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserprofileInput } from './dto/userprofile.input';
import { DataAndPaginationDTO, UserDto, UserPasswordUpdateDTO } from './dto/user.dto';
import { AddressDto } from './dto/address.dto';
import { HttpException, HttpStatus, Inject, Scope, SerializeOptions, UseGuards, UsePipes } from '@nestjs/common';
import { ValidationPipe } from '../comman/validation.pipe';
import { RolesDto, RolesInput } from './dto/roles.input';
import { UserupdateInput } from './dto/userupdate.input';
import { UserPasswordUpdate } from './dto/userPasswordUpdate.input';
import { DateOfBirthGuard } from '../comman/guards/dateOfBirth.guard';
import { UserAccessTokenInput } from './dto/userAccessToken.Input';
import { UserAccessTokenDto } from './dto/userAccessToken.dto';
import { UserAccessTokenWithOutCredInput } from './dto/userAccessTokenWithOutCred.input';
import { KeycloakCreateuserDto } from './dto/keycloakuser.dto';
import { BlobServiceClient, BlockBlobClient, } from '@azure/storage-blob';
import { KeycloakCreateuserInput } from './dto/keycloakuser.input';
import { request, gql, GraphQLClient } from 'graphql-request'
import {
  Public,
  Resource,
  RoleMatchingMode,
  Roles,
  Scopes,
  Unprotected,
} from 'nest-keycloak-connect';
import { AuthRoleGuard } from 'src/auth/authrole/authRole.guard';
import { ClientProxy } from '@nestjs/microservices';

var validator = require('validator');
import jwt_decode from 'jwt-decode';
import stringifyObject from 'stringify-object';
import { AuthHeader } from '../comman/custom-decorator/custom-decorator';
import { RequestHeader } from '../comman/custom-validation/Request.header';
import { KeycloakuploadphotoDto } from './dto/keycloakuseruploadphoto';
import { KeycloakuploadphotoInput } from './dto/keycloakuserinputphoto';
import { response } from 'express';
import { adminDasboardDTO } from './dto/adminDashboard.dto';
import { SasTokenBYFileNameDTO, SasTokenDTO } from './dto/sas.token';
import { Escape, sanitize, Trim } from 'class-sanitizer';
import { createEmailSubscriberDTO, EmailSubscriptionDataAndPaginationDTO } from './dto/email.subscriber.dto';
import { createEmailSubscriberInput, filterEmailSubscriber, updatecreateEmailSubscriberInput } from './dto/email.subscriber.input';
import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { TokenInput } from './dto/token.inputType';

@Resolver((of) => UserDto)
export class UsersResolver {
  constructor(private readonly usersService: UsersService,

  ) { }
  private userEndPoint = `${process.env.USER_HOST}/users`;
  private objectEndPoint = `${process.env.OBJECT_HOST}/object`
  private applicationEndPoint = `${process.env.APPLICATION_HOST}/application`

  public async findcounters(query, endpoint, token) {
    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        authorization: `${token}`,
      }
    })
    const q = await graphQLClient.request(query)
    return q;
  }

  @Query(() => String)
  getMailChimpMemberByEmail(
    @AuthHeader() header: any,
    @Args('email', { type: () => String }) email: string,
  ) {
    const { authorization: token, ConfigurationFile } = header;
    const { RESPONSES , FIELDS} = ConfigurationFile
    return this.usersService.getMailChimpMemberByEmail(email, token, RESPONSES, FIELDS);
  }

  @Mutation(() => String)
  updateMailChimpMemberByEmail(
    @AuthHeader() header: any,
    @Args('email', { type: () => String }) email: string,
    @Args('status', { type: () => String }) status: string,
  ) {
    const { authorization: token, ConfigurationFile } = header;
    const { RESPONSES, FIELDS } = ConfigurationFile
    return this.usersService.updateMailChimpMemberByEmail(email,status, token, RESPONSES, FIELDS);
  }

  @Mutation(() => String)
  Registration(
    @AuthHeader() header: any,
    @Args('register') UserData: KeycloakCreateuserInput,
    @Args("role", { type: () => String }) role: string,
  ) {
    const { authorization: token, ConfigurationFile } = header;
    const { RESPONSES } = ConfigurationFile;
    let keycloakRoleCheck = role && role === undefined || role === 'admin' || role === 'client' || role === 'enduser';

    if (!keycloakRoleCheck) {
      throw new HttpException("invalid keycloak role", HttpStatus.METHOD_NOT_ALLOWED)
    }
    return this.usersService.createUserWithKeycloak(UserData, role, token, RESPONSES);
  }

  @Mutation(() => KeycloakuploadphotoDto)
  KeycloakUploadPhoto(
    @AuthHeader() header: any,
    @Args('uploadInfo') photoInfo: KeycloakuploadphotoInput,
  ) {
    const { authorization: token, ConfigurationFile } = header;
    const { RESPONSES } = ConfigurationFile
    return this.usersService.keycloakUploadPhoto(photoInfo, token);
  }

  @Mutation(() => UserAccessTokenDto)
  @Unprotected()
  login(@Args('Login') UserData: UserAccessTokenInput) {
    return this.usersService.accessToken(UserData);
  }


  @Mutation(() => UserAccessTokenDto)
  @Unprotected()
  loginWithOutCredientials(
    @Args('LoginUserNoCred') UserData: UserAccessTokenWithOutCredInput,
  ) {
    return this.usersService.accessTokenWithOutCredientials(UserData);
  }

  ///// Keycloak login and Registration End ////

  // @Mutation(() => UserDto)

  @Mutation(() => UserDto)
  @Roles({ roles: ['realm:admin', 'realm:enduser', 'realm:client'] })
  async userCreate(

    @AuthHeader() header: any,
    @Args("adminCreation", { type: () => Boolean }) adminCreation: boolean,
    @Args('KeycloakRole', { type: () => String }) KeycloakRole: string,
    @Args('createUser') createUserProfile: UserprofileInput) {
    var { authorization: token, ConfigurationFile } = header;
    const { RESPONSES, FIELDS, USERS } = ConfigurationFile;
    let adminToken = token;
    let keycloakRoleCheck = KeycloakRole && KeycloakRole === undefined || KeycloakRole === 'admin' || KeycloakRole === 'client' || KeycloakRole === 'enduser';

    if (!keycloakRoleCheck) {
      throw new HttpException("invalid keycloak role", HttpStatus.METHOD_NOT_ALLOWED)
    }
    await this.usersService.ValidationInputData(createUserProfile, RESPONSES, FIELDS);
    await this.usersService.EnumValidationFunction(createUserProfile, RESPONSES, FIELDS, USERS);
    if (adminCreation) {
      const { email, password, firstName, lastName, mobileNumber } = createUserProfile
      let UserData = {
        username: email,
        enabled: true,
        emailVerified: false,
        firstName: firstName,
        lastName: lastName,
        email: email,
        attributes: { "mobileNumber": mobileNumber },
        credentials: [{
          type: "password",
          value: password,
          temporary: false
        }]
      }
      console.log("userdata", UserData)
      let role = KeycloakRole;
      try {
        const newUserData = await this.usersService.createUserWithKeycloak(UserData, role, token, RESPONSES);
        console.log("new users ", newUserData)
        if (newUserData.indexOf("successfully")) {
          const loginData = {
            username: email,
            password: password,
            grant_type: "password",
            client_id: `${process.env.KEYCLOAK_CLIENT_ID}`,
            client_secret: `${process.env.KEYCLOAK_CLIENT_SECRET}`,
          }
          const newCreatedUserKeycloak = await this.usersService.accessToken(loginData);
          console.log("new keycloak usr", newCreatedUserKeycloak)
          if (newCreatedUserKeycloak.access_token) {
            token = newCreatedUserKeycloak.access_token;
          }
        }
        if(KeycloakRole && KeycloakRole === "client"){
          const decodeTokenData: TokenInput = jwt_decode(token);
          const updateUserData = {
            enabled:false,
          }
          const updateKeycloakUser = await this.usersService.UpdateKeycloakUser(updateUserData, adminToken, decodeTokenData.sub);
        }
        return this.usersService.create(createUserProfile, token, RESPONSES, FIELDS, USERS);
      }
      catch (error) {
        if (error) {
          console.log("errors 2", error)
          throw new HttpException(error?.response || error?.Error || "error", error?.status || HttpStatus.INTERNAL_SERVER_ERROR);
        }
      }
    }
    return this.usersService.create(createUserProfile, token, RESPONSES, FIELDS, USERS);

  }

  @Query(() => UserDto)
  //// Client can access endUser data with some fields are restricted 
  @Roles({ roles: ['realm:admin', 'realm:client', 'realm:enduser'], mode: RoleMatchingMode.ANY })
  getUserData(
    @AuthHeader() header: any,
    @Args('id', { type: () => String }) id: string,
  ) {
    const { authorization: token, ConfigurationFile } = header;
    const { RESPONSES } = ConfigurationFile
    return this.usersService.getUserData(id, token, RESPONSES);
  }

  @Query(() => DataAndPaginationDTO)
  @Roles({ roles: ['realm:admin'], mode: RoleMatchingMode.ANY })
  findAllUser(
    @AuthHeader() header: any,
    @Args("perPage", { type: () => Number }) perPage: number,
    @Args("pageNum", { type: () => Number }) pageNum: number,
    @Args("sort", { type: () => String }) sort: string,
    @Args("deletionList", { type: () => [String] }) deletionList: String[],
    @Args("roleIdList", { type: () => [String] }) roleIdList: string[],
  ) {
    const { authorization: token, ConfigurationFile } = header;
    const { RESPONSES } = ConfigurationFile;
    return this.usersService.getAllUser(perPage, pageNum, sort, roleIdList, RESPONSES, deletionList);
  }

  @Mutation(() => UserDto)
  @UsePipes(new ValidationPipe())
  @Roles({ roles: ['realm:admin', 'realm:enduser', 'realm:client'], mode: RoleMatchingMode.ANY })
  async updateUser(
    @AuthHeader() header: any,
    @Args('updateUser') updateUser: UserupdateInput,
  ) {
    if(updateUser?.deActiveDate || updateUser?.isDeActivated){
      const documentQueued = await this.usersService.documentQueues(updateUser?._id);
      const vlogQueueDelete = await this.usersService.removeVlogQueues(updateUser?._id)
    }
    const { authorization: token, ConfigurationFile } = header;
    const { RESPONSES, FIELDS, USERS } = ConfigurationFile;
    const { _id } = updateUser;
    if (!_id) {
      throw new HttpException("_id not found", 404);
    }
    await this.usersService.ValidationUpdateData(updateUser, RESPONSES, FIELDS);
    await this.usersService.EnumValidationFunction(updateUser, RESPONSES, FIELDS, USERS);

    // oldpassword and newpassword
    return this.usersService.update(_id, updateUser, token, RESPONSES, FIELDS, USERS);
  }


  // @Mutation(() => UserPasswordUpdateDTO)
  // @UsePipes(new ValidationPipe())
  // @Roles({ roles: ['realm:admin', 'realm:enduser', 'realm:client'], mode: RoleMatchingMode.ANY })
  // async userPasswordUpdate(
  //   @AuthHeader() header: any,
  //   @Args('userPasswordUpdate') userPasswordUpdate: UserPasswordUpdate,
  // ) {
  //   const { authorization: token, ConfigurationFile } = header;
  //   const { RESPONSES, FIELDS, USERS } = ConfigurationFile;
  //   const { _id } = userPasswordUpdate;
  //   if (!_id) {
  //     throw new HttpException("_id not found", 404);
  //   }
  //   await this.usersService.passwordValidation(userPasswordUpdate, RESPONSES, FIELDS);

  //   return this.usersService.updatePassword(_id, userPasswordUpdate, token, RESPONSES, FIELDS, USERS);
  // }




  @Mutation(() => UserDto)
  @Roles({ roles: ['realm:admin'], mode: RoleMatchingMode.ANY })
  updateUserStatus(
    @AuthHeader() header: any,
    @Args('_id', { type: () => String }) _id: string,
    @Args('isDeleted', { type: () => Number }) isDeleted: number,
  ) {
    const { languages, authorization: token, ConfigurationFile } = header;
    const { RESPONSES, FIELDS, USERS } = ConfigurationFile;
    return this.usersService.updateUserStatus(_id, isDeleted, token, RESPONSES, FIELDS, USERS);
  }

  @Mutation(() => [UserDto])
  @Roles({ roles: ['realm:admin'], mode: RoleMatchingMode.ANY })
  removeMultipleUsers(
    @AuthHeader() header: any,
    @Args('userIdList', { type: () => [String] }) userIdList: string[],
    @Args('isDeleted', { type: () => Number }) isDeleted: number,
  ) {
    const { languages, authorization: token, ConfigurationFile } = header;
    const { RESPONSES, FIELDS, USERS } = ConfigurationFile;
    return this.usersService.RemoveMultipleUsers(userIdList, isDeleted, token, RESPONSES, FIELDS, USERS);
  }

  @Query(() => [UserDto])
  @Roles({ roles: ['realm:admin'], mode: RoleMatchingMode.ANY })
  getUsersByIdList(
    @AuthHeader() header: any,
    @Args('userIdList', { type: () => [String] }) userIdList: string[],
  ) {
    const { languages, authorization: token, ConfigurationFile } = header;
    const { RESPONSES, FIELDS, USERS } = ConfigurationFile;
    return this.usersService.getUsersByIdList(userIdList, token, RESPONSES, FIELDS, USERS);
  }
  //// Resolver Field For Address Object
  @ResolveField((returns) => [UserDto])
  @Roles({ roles: ['realm:admin', 'realm:enduser', 'realm:client'], mode: RoleMatchingMode.ANY })
  async address(@Parent() user: UserDto) {
    console.log("address called")
    const { _id } = user;
    return this.usersService.address(_id);
  }

  @ResolveField((returns) => [UserDto])
  @Roles({ roles: ['realm:admin', 'realm:enduser', 'realm:client'], mode: RoleMatchingMode.ANY })
  async vlogDescription(@Parent() user: UserDto) {
    const { _id } = user;
    console.log("vlog details called")
    return this.usersService.vlogDescription(_id);
  }

  @ResolveField((returns) => [UserDto])
  @Roles({ roles: ['realm:admin', 'realm:enduser', 'realm:client'], mode: RoleMatchingMode.ANY })
  async username(@Parent() user: UserDto) {

    const { _id } = user;
    return this.usersService.username(_id);
  }

  @ResolveField((returns) => [UserDto])
  @Roles({ roles: ['realm:admin', 'realm:enduser', 'realm:client'], mode: RoleMatchingMode.ANY })
  async applicantAge(@Parent() user: UserDto) {

    if (user.dateOfBirth) {
      const { _id } = user;
      return this.usersService.applicantAge(_id);
    } else {
      return 0
    }
  }
  @Mutation(() => UserDto)
  @Roles({ roles: ['realm:admin', 'realm:enduser', 'realm:client'], mode: RoleMatchingMode.ANY })
  removeUser(
    @AuthHeader() header: any,
    @Args('id', { type: () => String }) id: string,
  ) {
    const { authorization: token, ConfigurationFile } = header;
    const { RESPONSES } = ConfigurationFile;
    return this.usersService.remove(id, token, RESPONSES);
  }
  
  @Query(() => UserDto)
  @Roles({ roles: ['realm:enduser', 'realm:admin', 'realm:client'], mode: RoleMatchingMode.ANY })
  findUserByID(
    @AuthHeader() header: any,
    @Args('id', { type: () => String }) id: string,
  ) {
    const { authorization: token, ConfigurationFile } = header;
    const { RESPONSES } = ConfigurationFile;
    return this.usersService.findbyid(id, token, RESPONSES);
  }

  @Query(() => UserDto)
  @Roles({ roles: ['realm:enduser', 'realm:admin', 'realm:client'], mode: RoleMatchingMode.ANY })
  findbyEmail(
    @AuthHeader() header: any,
    @Args('email', { type: () => String }) email: string,
  ) {
    const { authorization: token, ConfigurationFile } = header;
    const { RESPONSES } = ConfigurationFile;
    return this.usersService.findbyemail(email, token, RESPONSES);
  }

  @Query(() => UserDto)
  @Roles({ roles: ['realm:enduser', 'realm:admin', 'realm:client'], mode: RoleMatchingMode.ANY })
  findbyMobileNumber(
    @AuthHeader() header: any,
    @Args('number', { type: () => String }) number: string,
  ) {
    const { authorization: token, ConfigurationFile } = header;
    const { RESPONSES } = ConfigurationFile;
    return this.usersService.findbymobilenumber(number, token, RESPONSES);
  }

  @Query(() => UserDto)
  @Roles({ roles: ['realm:enduser', 'realm:admin', 'realm:client'], mode: RoleMatchingMode.ANY })
  findbyProfessionID(
    @AuthHeader() header: any,
    @Args('professionID', { type: () => Number }) professionID: number,
  ) {
    const { authorization: token, ConfigurationFile } = header;
    const { RESPONSES } = ConfigurationFile;
    return this.usersService.findbyprofessionID(professionID, token, RESPONSES);
  }
  @Query(() => Int)
  @Roles({ roles: ['realm:admin'], mode: RoleMatchingMode.ANY })
  getTotalUserActiveCount(
    @AuthHeader() header: any,
  ) {
    const { authorization: token, languages, ConfigurationFile } = header;
    return this.usersService.getTotalUserCountForisActive(token, languages)
  }

  @Query(() => SasTokenDTO)
  getSaSToken(
    @AuthHeader() header: any,
  ) {

    var azureConnection = "DefaultEndpointsProtocol=https;AccountName=vlogmakelaarsstorage;AccountKey=DP2bggKLPdGOJAuxSNWzYxOWnldKz45iXFRRkF/OAqYGM4V+Pn+lGqNnJtyZrSltuwio77/yI8/8ps8J8ngRUA==;EndpointSuffix=core.windows.net"
    var containerName = "test2";


    const blobClientService = BlobServiceClient.fromConnectionString(azureConnection);
    const containerClient = blobClientService.getContainerClient(containerName);
    //   const blobClient = containerClient.getBlockBlobClient(imageName);

    const { authorization: token, languages, ConfigurationFile } = header;
    return this.usersService.generateSASKey();

  }

  @Query(() => SasTokenBYFileNameDTO)
  getSaSTokenBYFileName(
    @AuthHeader() header: any,
    @Args('containerName', { type: () => String }) containerName: string,
    @Args('fileName', { type: () => String }) fileName: string,
  ) {
    const { authorization: token, languages, ConfigurationFile } = header;
    return this.usersService.getSaSTokenBYFileName(containerName, fileName,token, languages)

  }
  @Query(() => adminDasboardDTO)
  async getAdminDashboardCounts(
    @AuthHeader() header: any,
  ) {
    const { authorization: token, languages, ConfigurationFile } = header;

    return {
      getCurrentDateApplicationsRequest: (
        await this.findcounters(
          gql`query{
        getAppRequestCurrentCount
        }`,
          this.applicationEndPoint,
          token)
      ).getAppRequestCurrentCount,
      getRegisteredApplications: (
        await this.findcounters(
          gql`query{
            getAppRegisterCount
          }`,
          this.applicationEndPoint,
          token)
      ).getAppRegisterCount,
      getTotalApplications: (
        await this.findcounters(
          gql`query{
            getTotalApplicationCount
          }`,
          this.applicationEndPoint,
          token)
      ).getTotalApplicationCount,
      getHouses: (
        await this.findcounters(
          gql`query{
            findHousesCount
          }`,
          this.objectEndPoint,
          token)
      ).findHousesCount,
      getReviewedHouses: (
        await this.findcounters(
          gql`query{
            findReviewedHousesCount
          }`,
          this.objectEndPoint,
          token)
      ).findReviewedHousesCount,
      getPublishedHouses: (
        await this.findcounters(
          gql`query{
            findPublishedHousesCount
          }`,
          this.objectEndPoint,
          token)
      ).findPublishedHousesCount,
      getEnduser: await this.usersService.findbyRole(2),
      getClient: await this.usersService.findbyRole(0),
      getActiveUser: await this.usersService.getTotalUserCountForisActive(token, languages)
    }
  }

  @Query(() => String)
  async getByUserRole(
    @AuthHeader() header: any,
    @Args('role', { type: () => Number }) role: number,
  ) {
    return this.usersService.findbyRole(role)
  }

  @Query(() => String)
  async getUserAttributes(
    @AuthHeader() header: any,
  ) {
    return this.usersService.userSchema();
  }

  @Query(() => DataAndPaginationDTO)
  async userSearchFilter(
    @AuthHeader() header: any,
    @Args("perPage", { type: () => Number }) perPage: number,
    @Args("pageNum", { type: () => Number }) pageNum: number,
    @Args("sort", { type: () => String }) sort: string,
    @Args("search", { type: () => String, nullable: true }) search: string,
    @Args("roleIdList", { type: () => [String], nullable: true }) roleIdList: string[],
    @Args("status", { type: () => Number, nullable: true }) status: number,
    @Args("deletionList", { type: () => [String], nullable: true }) deletionList: String[],
    @Args("sortColumn", { nullable: true }) sortColumn: string,
  ) {

    class SenitizeClass {
      @Trim()
      @Escape()
      search: string;

      constructor(search: string) {
        this.search = search;
      }
      public accessAttributes() {
        return {
          search: this.search,
        };
      }
    }
    const senitizeInstance = new SenitizeClass(search);
    /// senitizing data 
    let data = sanitize(senitizeInstance);
    const { ConfigurationFile } = header;
    const { RESPONSES, FIELDS } = ConfigurationFile;
    //// replace double quotes into single quotes
    if(sortColumn){
      sortColumn = sortColumn.replace(/'/g, "\"");
      sortColumn = JSON.parse(sortColumn);
    }
    return this.usersService.searchFilter(senitizeInstance.accessAttributes().search, roleIdList, status, deletionList,sortColumn, RESPONSES, FIELDS, perPage, pageNum, sort);
  }
  //// Email Subscriber start here /////
  @Mutation(() => createEmailSubscriberDTO)
  async createEmailSubscriber(
    @AuthHeader() header: any,
    @Args('createEmail') createEmail: createEmailSubscriberInput,

  ) {

    const { authorization: token, languages, ConfigurationFile } = header;
    const { RESPONSES, FIELDS } = ConfigurationFile;
    return this.usersService.createEmailSubscriber(createEmail, RESPONSES, FIELDS, languages);
  }


  @Mutation(() => createEmailSubscriberDTO)
  async updateEmailSubscriber(
    @AuthHeader() header: any,
    @Args('updateEmail') updateEmail: updatecreateEmailSubscriberInput,

  ) {

    const { authorization: token, languages, ConfigurationFile } = header;
    const { RESPONSES, FIELDS } = ConfigurationFile;
    return this.usersService.updateEmailSubscriber(updateEmail, RESPONSES, FIELDS, languages);
  }

  @Query(() => EmailSubscriptionDataAndPaginationDTO)
  async findEmailSubscribers(
    @AuthHeader() header: any,
    @Args("perPage", { type: () => Number }) perPage: number,
    @Args("pageNum", { type: () => Number }) pageNum: number,
    @Args("sort", { type: () => String }) sort: string,
    @Args('filters', { nullable: true }) filters: filterEmailSubscriber,

  ) {

    const { authorization: token, languages, ConfigurationFile } = header;
    const { RESPONSES, FIELDS } = ConfigurationFile;
    return this.usersService.findEmailSubscribers(filters, perPage, pageNum, sort,RESPONSES, FIELDS,languages);
  }
}
