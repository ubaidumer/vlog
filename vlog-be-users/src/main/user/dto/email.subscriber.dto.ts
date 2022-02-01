import { Field, ObjectType, Int } from '@nestjs/graphql';
@ObjectType()
class createEmailSubscriberDTO {
  @Field({ nullable: true })
  _id?: string;
  @Field({ nullable: true })
  userId: String;
  @Field()
  email: String;

  @Field({ nullable: true })
  city: String;

  @Field({ nullable: true })
  subscriptionType: String;

  @Field()
  status: Boolean;
}


@ObjectType()
class EmailSubscriptionDataAndPaginationDTO {
    @Field(type=>[createEmailSubscriberDTO])
    data:createEmailSubscriberDTO[];
    
    @Field(type=>Int, {nullable:true})
    totalCount?: number = 0;
}


export {
  createEmailSubscriberDTO,
  EmailSubscriptionDataAndPaginationDTO,
}