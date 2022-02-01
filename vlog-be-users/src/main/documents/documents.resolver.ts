import { Resolver, Query, Mutation, Args, Int, ObjectType, Field } from '@nestjs/graphql';
import { DocumentsService } from './documents.service';
import { DocumentsSchema } from './entities/document.entity';
import { UpdateDocumentInput } from './dto/update-document.input';
import {  DataAndPaginationDOCDTO, DocumentDto } from './dto/document.dto';
import { DocumentInput } from './dto/document.input';
import { AuthHeader } from '../comman/custom-decorator/custom-decorator';
import { RoleMatchingMode, Roles } from 'nest-keycloak-connect';
import { Get } from '@nestjs/common';
import { SchemaTypes, Types, Document } from 'mongoose';
import { UsersService } from '../user/users.service';

@Resolver(() => DocumentDto)
export class DocumentsResolver {
  constructor(private readonly usersService: UsersService,private readonly documentsService: DocumentsService) { }
  @Mutation(() => DocumentDto)
  @Roles({ roles: ['realm:admin', 'realm:client', 'realm:enduser'], mode: RoleMatchingMode.ANY })
  createDocument(
    @AuthHeader() header: any,
    @Args('create') createDocument: DocumentInput) {
    const { authorization: token, ConfigurationFile } = header;
    const { RESPONSES, APPLICATION, FIELDS, USERS: UserConfig } = ConfigurationFile
    return this.documentsService.create(createDocument, token, RESPONSES, FIELDS, UserConfig);
  }

  @Mutation(() => [DocumentDto])
  @Roles({ roles: ['realm:admin', 'realm:client', 'realm:enduser'], mode: RoleMatchingMode.ANY })
  addMultipleDocuments(
    @AuthHeader() header: any,
    @Args('create', { type: () => [DocumentInput] }) createDocument: DocumentInput[]) {
    const { authorization: token, ConfigurationFile } = header;
    const { RESPONSES, APPLICATION, FIELDS, USERS: UserConfig } = ConfigurationFile
    return this.documentsService.addMultipleDocuments(createDocument, token, RESPONSES, FIELDS, UserConfig);
  }


  @Query(() => DataAndPaginationDOCDTO, { name: 'findAllDocument' })
  @Roles({ roles: ['realm:admin'], mode: RoleMatchingMode.ANY })
  findAllDocument(
    @AuthHeader() header: any,
    @Args("perPage", { type: () => Number }) perPage: number,
    @Args("pageNum", { type: () => Number }) pageNum: number,
    @Args("sort", { type: () => String }) sort: string,
  ) {
    const { authorization: token, ConfigurationFile } = header;
    const { RESPONSES, APPLICATION, FIELDS, USERS: UserConfig } = ConfigurationFile
    return this.documentsService.findAll(perPage, pageNum, sort, RESPONSES, FIELDS);
  }

  @Query(() => DataAndPaginationDOCDTO)
  @Roles({ roles: ['realm:admin','realm:enduser', 'realm:client'], mode: RoleMatchingMode.ANY })
  getAllDocumentByUserId(
    @AuthHeader() header: any,
    @Args("perPage", { type: () => Number }) perPage: number,
    @Args("pageNum", { type: () => Number }) pageNum: number,
    @Args("sort", { type: () => String }) sort: string,
    @Args("userid", { type: () => String }) userId: string,
  ) {
    const { authorization: token, ConfigurationFile } = header;
    const { RESPONSES, APPLICATION, FIELDS, USERS: UserConfig } = ConfigurationFile
    return this.documentsService.getAllDocumentByUserid(perPage, pageNum, sort, RESPONSES, FIELDS, userId);
  }

  @Query(() => DataAndPaginationDOCDTO)
  @Roles({ roles: ['realm:admin','realm:enduser', 'realm:client'], mode: RoleMatchingMode.ANY })
  getAllDocumentByOwnerId(
    @AuthHeader() header: any,
    @Args("perPage", { type: () => Number }) perPage: number,
    @Args("pageNum", { type: () => Number }) pageNum: number,
    @Args("sort", { type: () => String }) sort: string,
    @Args("userid", { type: () => String }) userId: string,
  ) {
    const { authorization: token, ConfigurationFile } = header;
    const { RESPONSES, APPLICATION, FIELDS, USERS: UserConfig } = ConfigurationFile
    return this.documentsService.getAllDocumentByOwnerId(perPage, pageNum, sort, RESPONSES, FIELDS, userId);
  }
  @Query(() => DocumentDto)
  @Roles({ roles: ['realm:enduser', 'realm:admin', 'realm:user'], mode: RoleMatchingMode.ANY })
  findById(
    @AuthHeader() header: any,
    @Args('id', { type: () => String }) id: string,
  ) {
    const { authorization: token, ConfigurationFile } = header;
    const { RESPONSES } = ConfigurationFile
    return this.documentsService.findOne(id, token, RESPONSES);
  }

  @Mutation(() => DocumentDto)
  updateDocument(
    @AuthHeader() header: any,
    @Args('updateDocumentInput') updateDocumentInput: UpdateDocumentInput) {

    const { authorization: token, ConfigurationFile } = header;
    const { RESPONSES, APPLICATION, FIELDS, USERS: UserConfig } = ConfigurationFile
    return this.documentsService.update(updateDocumentInput, token, RESPONSES, FIELDS, UserConfig);
  }

  @Mutation(() => DocumentDto)
  @Roles({ roles: ['realm:admin', 'realm:enduser', 'realm:client'], mode: RoleMatchingMode.ANY })
  async removeDocument(
    @AuthHeader() header: any,
    @Args('Userid', { type: () => String }) id: string,
    @Args('Docid', { type: () => String }) did: string,
    ) {
    const { authorization: token, ConfigurationFile } = header;
    const { RESPONSES, APPLICATION, FIELDS, USERS: UserConfig } = ConfigurationFile
    const addToQueueDocuments = await this.documentsService.addToQueueDocumentsProducer(id,did);
    return this.documentsService.remove(id,did,token, RESPONSES);
  }
  ///// ALL ENUM lIST [Start here]/////
  @Query(() => String)
  @Roles({ roles: ['realm:enduser', 'realm:admin', 'realm:user'], mode: RoleMatchingMode.ANY })
  getStudentDocumentList(
    @AuthHeader() header: any,
  ) {
    const { authorization: token, ConfigurationFile } = header;
    const { RESPONSES, USERS } = ConfigurationFile
    return JSON.stringify(USERS.STUDENT_DOC_ENUM)
  }


  @Query(() => String)
  @Roles({ roles: ['realm:enduser', 'realm:admin', 'realm:user'], mode: RoleMatchingMode.ANY })
  getEmployeeDocumentList(
    @AuthHeader() header: any,
  ) {
    const { authorization: token, ConfigurationFile } = header;
    const { RESPONSES, USERS } = ConfigurationFile
    return JSON.stringify(USERS.EMPOLOYEE_DOC_ENUM)
  }

  @Query(() => String)
  @Roles({ roles: ['realm:enduser', 'realm:admin', 'realm:user'], mode: RoleMatchingMode.ANY })
  getOwnerDocumentList(
    @AuthHeader() header: any,
  ) {
    const { authorization: token, ConfigurationFile } = header;
    const { RESPONSES, USERS } = ConfigurationFile
    return JSON.stringify(USERS.OWNER_DOC_ENUM)
  }

  @Query(() => String)
  @Roles({ roles: ['realm:enduser', 'realm:admin', 'realm:user'], mode: RoleMatchingMode.ANY })
  getAllDocumentList(
    @AuthHeader() header: any,
  ) {
    const { authorization: token, ConfigurationFile } = header;
    const { RESPONSES, USERS } = ConfigurationFile
    return JSON.stringify(USERS.DOCUMENT_TYPE_LIST)
  }

  @Mutation(()=>String)
  async deleteBlobUsingBlobId(
    @AuthHeader() header:any,
    @Args("fileType", {type: ()=>String}) fileType: string,
    @Args("blobId", {type: ()=>String}) blobId: string,
    @Args("userId", {type: ()=>String}) userId: string,
  ){  
  const { authorization: token,languages,ConfigurationFile} = header
  const {RESPONSES,FIELDS} = ConfigurationFile;
  
  var containerName = '';

  if(fileType == 'document'){
    containerName ='vlogdocs';
    const doc = await this.documentsService.findByBlobId(userId,blobId,token,RESPONSES);
    if(typeof(doc.errors)!='undefined'){
      return RESPONSES.ERROR.NOT_FOUND.replace('XXXX', 'Document')
    }
    const removeDocument= await this.documentsService.remove(userId,doc._id,token,RESPONSES);
    console.log('deleted document:',removeDocument);
  }

  if(fileType == 'profileImage'){
    containerName = 'userimages';
     let info = {
       profileImage: '',
       keycloakId:userId
     }
     const img = await this.usersService.keycloakUploadPhoto(info,token)
     console.log('deleted image:',img);
  }

   return await this.documentsService.deleteBlob(containerName,blobId,RESPONSES);
  }
  ///// ALL ENUM lIST [END here]/////
}
