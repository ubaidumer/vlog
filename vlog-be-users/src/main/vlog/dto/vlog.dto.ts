import {
    Field,
    ObjectType,
    Int,
    InputType,
    Extensions,
  
    OmitType,
    InputTypeOptions,
  } from '@nestjs/graphql';


  @ObjectType()
  export class VlogDto{

    @Field({nullable:true})
    _id?:string;

    @Field({nullable:true})
    userId:string;

    @Field({nullable:true})
    vlogTitle:string;

    @Field({nullable:true})
    vlogDescription:string;

    @Field({nullable:true})
    vlogVideo:string;
    
  }