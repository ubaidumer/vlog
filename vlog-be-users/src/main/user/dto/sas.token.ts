import { Field, IntersectionType, ObjectType } from "@nestjs/graphql";



@ObjectType()
class SasTokenDTO {
    @Field({ nullable: true })
    accessToken: string;

    @Field({ nullable: true })
    startDate: string;

    @Field({ nullable: true })
    expiryDate: string;
}

@ObjectType()
class SasTokenBYFileNameDTO {
    @Field({ nullable: true })
    accessToken: string;

    @Field({ nullable: true })
    startDate: string;

    @Field({ nullable: true })
    expiryDate: string;
    @Field({ nullable: true })
    sasUrl: string;

}

export {
    SasTokenDTO,
    SasTokenBYFileNameDTO,
}