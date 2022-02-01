import {
    Field,
    ObjectType,
    Int,
    InputType,
    Extensions,
  
    OmitType,
    InputTypeOptions,
    PartialType,
  } from '@nestjs/graphql';


  import { CreateVlogInput } from './create.vlog.input';
  @InputType()
  export class UpdateVlogInput extends PartialType(CreateVlogInput) {
    
  }