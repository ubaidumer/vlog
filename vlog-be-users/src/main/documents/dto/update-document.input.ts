import { Field, InputType, OmitType, PartialType } from "@nestjs/graphql";
import { DocumentInput } from "./document.input";


@InputType()
 class UpdateDocumentInputType extends PartialType(DocumentInput) {
     @Field()
     _id: string;
}

 
@InputType() 

export class UpdateDocumentInput extends OmitType(UpdateDocumentInputType, ['userId'] as const) {}