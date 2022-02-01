import { Field, InputType, ObjectType, registerEnumType } from "@nestjs/graphql";
import { UserDocumentTypeEnum } from "./documentType.enum";

registerEnumType(UserDocumentTypeEnum, {
    name: "UserDocumentTypeEnum",
});


@InputType()
export class DocumentInput {
    @Field({ nullable: true })
    _id?: string;
  
    @Field({ nullable: true })
    userId: string;
    @Field({ nullable: true })
    blobId: string;
    @Field({ nullable: true })
    blobTitle: string;
    @Field({ nullable: true })
    documentType: number;
    @Field({ nullable: true })
    isDeleted:Boolean;
}
 