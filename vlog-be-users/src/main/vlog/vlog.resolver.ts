import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VlogService } from './vlog.service';
import { VlogDto } from "./dto/vlog.dto";
import { CreateVlogInput } from './dto/create.vlog.input';
import { UpdateVlogInput } from './dto/update.vlog.input';
import { RoleMatchingMode, Roles } from 'nest-keycloak-connect';
import { AuthHeader } from '../comman/custom-decorator/custom-decorator';

@Resolver(() => VlogDto)
export class VlogResolver {
  constructor(private readonly vlogService: VlogService) {}

  @Mutation(() =>VlogDto)
  @Roles({ roles: ['realm:enduser', 'realm:client','realm:admin'], mode: RoleMatchingMode.ANY })
  async createVlog(
    @AuthHeader() header: any,
    @Args('createVlogInput') createVlogInput: CreateVlogInput) {
      const { authorization: token, ConfigurationFile } = header;
      const { RESPONSES,FIELD } = ConfigurationFile;
      await this.vlogService.ValidationInput(createVlogInput,RESPONSES,FIELD);
    return this.vlogService.create(createVlogInput,token,RESPONSES,FIELD);
  }

  @Query(() => [VlogDto])
  @Roles({ roles: ['realm:enduser', 'realm:admin', 'realm:client'], mode: RoleMatchingMode.ANY })
  findAllVlogs(
    @AuthHeader() header: any,
    @Args( 'userId',{type:()=>String ,nullable:true})userId:String,
    @Args("perPage", {type: ()=>Number}) perPage: number,
    @Args("pageNum", {type: ()=>Number}) pageNum: number,
    @Args("sort", {type: ()=>String}) sort: string,
  ) {
    const { authorization: token, ConfigurationFile } = header;
    const { RESPONSES,FIELD } = ConfigurationFile
    return this.vlogService.findAll(userId,perPage,pageNum,sort,token, RESPONSES,FIELD);
  }

  @Query(() =>VlogDto)
  @Roles({ roles: ['realm:enduser', 'realm:admin', 'realm:client'], mode: RoleMatchingMode.ANY })
  findOne(
    @AuthHeader() header: any,
    @Args('id', { type: () => String }) id: string) {
      const { authorization: token, ConfigurationFile } = header;
      const { RESPONSES,FIELD } = ConfigurationFile
      return this.vlogService.findOne(id,token,RESPONSES,FIELD);
  }

  @Mutation(() => VlogDto)
  @Roles({ roles: ['realm:enduser', 'realm:admin', 'realm:client'], mode: RoleMatchingMode.ANY })
  updateVlog(
    @AuthHeader() header: any,
    @Args('updateVlogInput') updateVlogInput: UpdateVlogInput ,
    @Args("id", {type: ()=>String}) id: string,
    
    )
    {
      const { authorization: token, ConfigurationFile } = header;
      const { RESPONSES,FIELD } = ConfigurationFile
    return this.vlogService.update(id,updateVlogInput,token,RESPONSES,FIELD);
  }

  @Mutation(() => VlogDto)
  @Roles({ roles: ['realm:admin'], mode: RoleMatchingMode.ANY })
  removeVlog(
    @AuthHeader() header: any,
    @Args('id', { type: () => String }) id: string) {
      
      const { authorization: token, ConfigurationFile } = header;
      const { RESPONSES,FIELD } = ConfigurationFile
    return this.vlogService.remove(id,token,RESPONSES,FIELD);
    
  }
}
