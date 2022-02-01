import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class RemoveInvoicesInput {
    @Field({nullable: true})
    _id?: string;
    
}