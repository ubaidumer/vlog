import { InputType, Int, Field, ObjectType, Extensions } from '@nestjs/graphql';

@ObjectType()
class InvoicesDto {
    @Field({ nullable: true })
    _id?: string;

    @Field({ nullable: true })
    invoiceNumber?: string;

    @Field()
    ownerID: string;

    @Field({nullable:true})
    ownerName: string;
    
    @Field({ nullable: true })
    applicationId?: string;

    @Field({ nullable: true })
    renterName: string;

    @Field()
    renterID: string;

    @Field({ nullable: true })
    userId: number;

    @Field({ nullable: true })
    houseID: string;

    @Field(() => Number, { nullable: true })
    invoicesType: number;

    @Field(() => Number, { nullable: true })
    amount: number;
    @Field(() => String, { nullable: true })
    transactionStatus:string
    @Field(() => String, { nullable: true })
    transactionID?: string;

    @Field(() => String, { nullable: true })
    paymentGateway?: string;

    @Field(type => Date, { nullable: true })
    date?: Date;

    @Field({ nullable: true })
    createdAt?: Date;
    @Field({ nullable: true })
    updatedAt?: Date;
    @Field({ nullable: true })
    createdById?: String;
    @Field({ nullable: true })
    updatedById?: String;
    @Field({ nullable: true })
    createdBy?: String;
    @Field({ nullable: true })
    updatedBy?: String;
}



@ObjectType()
class DataAndPaginationDTO {
    @Field(type => [InvoicesDto])
    data: InvoicesDto[];

    @Field(type => Int, { nullable: true })
    totalCount?: number = 0;
}

export {
    InvoicesDto,
    DataAndPaginationDTO,

}
