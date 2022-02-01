import {Field, InputType, Int, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class KeycloakuploadphotoDto {
    @Field({nullable:true})
    profileImage: String;
    @Field({nullable:true})
    keycloakId:String;
}

