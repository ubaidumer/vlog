import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
class CredientialsInput{
  @Field({nullable:true})
  type:string;
  @Field({nullable:true})
  value:string;
  @Field({nullable:true})
  temporary:boolean;

}
@InputType()
class customInput{
  @Field({nullable:true})
  profileImage:string;
  @Field({nullable:true})
  mobileNumber:string;
}
@InputType()
export class KeycloakCreateuserInput {
  @Field({nullable:true})
  username: string;

  @Field({nullable:true})
  enabled: boolean;

  @Field({nullable:true})
  emailVerified:boolean;

  @Field({nullable:true})
  firstName?: string;

  @Field({nullable:true})
  email?: string;
  
  @Field({nullable:true})
  lastName?: string;

  @Field(type=>customInput,{nullable:true})
  attributes:customInput

  @Field(()=>[CredientialsInput],{nullable:true})
  credentials?: CredientialsInput[]

  @Field({nullable:true})
  data?:string
}

