import { InputType, Int, Field, registerEnumType, createUnionType } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TransactionLog {
  @Field({ nullable: true })
    _id?: string;
    @Field({nullable:true})
    ownerID: string;
    @Field({ nullable: true })
    renterID: string;
    @Field({ nullable: true })
    houseID: string;
    @Field({ nullable: true })
    applicationId: string;
    @Field({ nullable: true })
    transactionID: string;
    @Field({ nullable: true })
    renterName: string;
    @Field({ nullable: true })
    ownerName: string;
    @Field({ nullable: true })
    invoicesType: Number;
    @Field({ nullable: true })
    amount: Number;
    @Field({ nullable: true })
    status:string;
    @Field({ nullable: true })
    errorCode:string;
    @Field({ nullable: true })
    transcript:string;
    @Field({ nullable: true })
    date: Date;
   
}


