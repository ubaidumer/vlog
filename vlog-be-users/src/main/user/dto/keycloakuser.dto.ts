import {Field, InputType, Int, ObjectType} from '@nestjs/graphql';

@ObjectType()
class CredientialsDto{
    @Field({nullable:true})
    type:string;
    @Field({nullable:true})
    value:string;
    @Field({nullable:true})
    temporary:boolean;
}
@ObjectType()
class custom{
  @Field({nullable:true})
  profileImage:string;
  @Field({nullable:true})
  mobileNumber:string; 
}
@ObjectType()
export class KeycloakCreateuserDto {
    @Field({nullable:true})
    username: string;

    @Field({nullable:true})
    enabled: boolean;

    @Field({nullable:true})
    emailVerified?:boolean;

    @Field({nullable:true})
    firstName?: string;

    @Field({nullable:true})
    lastName?: string;
    
    @Field({nullable:true})
    email?: string;
    
    @Field({nullable:true})
    attributes:custom

    @Field(()=>[CredientialsDto],{nullable:true})
    credentials?: CredientialsDto[]

    @Field({nullable:true})
    data?:string
}

