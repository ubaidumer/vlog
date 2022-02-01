import { Field, Int, InputType } from '@nestjs/graphql';

enum Status {
  Student = 'Student',
  Entrepreneur = 'Entrepreneur',
  Employed = 'Employed',
}
@InputType()
export class AddressInput {
  @Field()
  street: string;
  @Field()
  houseNumber: string;
  @Field()
  postCode: string;
  @Field()
  place: string;
}
