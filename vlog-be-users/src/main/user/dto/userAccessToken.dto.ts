import {Field, InputType, ObjectType} from "@nestjs/graphql";


@ObjectType()
export class UserAccessTokenDto{
    // @Field()
    // username: string;
    // @Field()
    // password: string;
    // @Field()
    // grant_type: string;
    // @Field()
    // client_id: string;

    @Field()
    access_token?: string;

    @Field()
    expires_in?: string;

    @Field()
    refresh_expires_in?: string;

    @Field()
    refresh_token?: string;

    @Field()
    token_type?: string;

    @Field()
    session_state?: string;


    // @Field()
    // client_secret?: string;


}