import { Field, ObjectType, Int, InputType, PartialType } from '@nestjs/graphql';
@InputType()
class createEmailSubscriberInput {
  @Field({ nullable: true })
  userId: String;
  @Field()
  email: String;

  @Field({ nullable: true })
  city: String;

  @Field({ nullable: true })
  subscriptionType: String;

  @Field({ defaultValue: true })
  status: Boolean;
}

@InputType()
class updatecreateEmailSubscriberInput extends PartialType(createEmailSubscriberInput) {
  @Field()
  _id: string
}

@InputType()
class filterEmailSubscriber {
  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  subscriptionType: string;
}


export {
  createEmailSubscriberInput,
  updatecreateEmailSubscriberInput,
  filterEmailSubscriber,
}



