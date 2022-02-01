
import { InputType, Field, Int, PartialType, OmitType } from '@nestjs/graphql';
import { CreateInvoicesInput } from './create-invoice.input';
@InputType()
export class UpdateInvoicesInput extends PartialType(CreateInvoicesInput) {
    /// required field for update all others will be optional
    @Field()
    _id: string;

}
