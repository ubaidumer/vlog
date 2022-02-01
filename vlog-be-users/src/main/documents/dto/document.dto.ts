import { Field, Int, ObjectType, registerEnumType } from "@nestjs/graphql";
import { UserDocumentTypeEnum } from "./documentType.enum";

@ObjectType()
class DocumentDto {
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
    isDeleted: Boolean;

}



@ObjectType()
class DataAndPaginationDOCDTO {
    @Field(type => [DocumentDto])
    data: DocumentDto[];

    @Field(type => Int, { nullable: true })
    totalCount?: number = 0;
}


export {
    DocumentDto,
    DataAndPaginationDOCDTO,

}