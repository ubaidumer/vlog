import { InputType, Int, Field, registerEnumType, createUnionType } from '@nestjs/graphql';

@InputType()
export class CreateInvoicesInput {
  @Field({ nullable: true })
    _id?: string;
    @Field({nullable:true})
    ownerID: string;

    @Field({nullable:true})
    invoiceNumber?: string;

    @Field({nullable:true})
    ownerName: string;

    @Field({nullable:true}) 
    renterName: string;

    @Field({nullable:true})
    renterID: string;

    @Field({nullable:true})
    houseID: string;

    @Field(type=>Int)
    invoicesType: number;

    @Field({nullable:true})
    applicationId?: string;

    @Field(type=>String)
    amount: string;

    @Field(() => String, { nullable: true })
    transactionStatus:string
    @Field(() => String,{nullable: true})
    transactionID?: string;

    @Field(() => String,{nullable: true})
    paymentGateway?: string;

    @Field(() => Date,{nullable: true})
    date?: Date;
   
}


