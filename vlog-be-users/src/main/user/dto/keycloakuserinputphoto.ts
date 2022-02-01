import {Field, InputType, Int, ObjectType} from '@nestjs/graphql';

@InputType()
export class KeycloakuploadphotoInput {
    @Field({nullable:true})
    profileImage: String;
    @Field({nullable:true})
    keycloakId:String;
}

