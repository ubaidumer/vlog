import {Field, InputType, ObjectType} from "@nestjs/graphql";


@InputType()
export class UserAccessTokenInput{
    @Field()
    username: string;
    @Field()
    password: string;
    @Field()
    grant_type: string;
    @Field()
    client_id: string;
    @Field()
    client_secret: string;
}
