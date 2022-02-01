import {InputType, OmitType, PartialType} from "@nestjs/graphql";
import {UserAccessTokenInput} from "./userAccessToken.Input";

@InputType()
export class UserAccessTokenWithOutCredInput extends PartialType(
    OmitType(UserAccessTokenInput, ['username', "password"] as const),
) {}