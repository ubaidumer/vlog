import {
    Field,
    ObjectType,
    Int,
    InputType,
    Extensions,
  
    OmitType,
    InputTypeOptions,
  } from '@nestjs/graphql';


  @InputType()
  export class CreateVlogInput{
    
    @Field()
    userId:string;

    @Field({nullable:true})
    vlogTitle:string;

    @Field({nullable:true})
    vlogDescription:string;

    @Field()
    vlogVideo:string;
    
  }