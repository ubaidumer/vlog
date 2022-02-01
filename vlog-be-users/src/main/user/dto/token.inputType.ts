import { Field, InputType, ObjectType } from "@nestjs/graphql";



@ObjectType()
export class Realm_access{
    @Field()
    roles:[string] 
}
@ObjectType()
export class TokenInput{
    @Field()
    exp: number;
    
    @Field()
    lat: number;

    @Field()
    iss: string;

    @Field()
    aud: [string];

    @Field()
    sub: string;

    @Field()
    typ: string;

    @Field()
    azp: string;

    @Field()
    session_state: string;

    @Field()
    acr: string;

    @Field(()=>Realm_access)
    realm_access: Realm_access;
}
