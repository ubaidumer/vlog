import { Field, ObjectType, Int } from '@nestjs/graphql';

enum Status {
  Student = 'Student',
  Entrepreneur = 'Entrepreneur',
  Employed = 'Employed',
}

@ObjectType()
export class CreateUserprofile {
  @Field({ nullable: true })
  _id?: string;
  @Field()
  firstName: string;
  @Field()
  lastName: string;
  @Field({ nullable: true })
  mobileNumber: string;
  @Field()
  email: string;
  @Field(() => Date,{nullable:true})
  dateOfBirth: Date;
  @Field()
  street: string;
  @Field()
  houseNumber: string;
  @Field()
  postCode: string;
  @Field()
  place: string;
  @Field(() => Int,{nullable:true})
  status: number;
  @Field(() => Int,{nullable:true})
  professionID: number;
  @Field({nullable:true})
  profilePicture: string;
}
