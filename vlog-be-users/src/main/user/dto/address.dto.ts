import { Field, Int, InputType, ObjectType } from '@nestjs/graphql';


@ObjectType()
export class AddressDto {
  @Field({ nullable: true })
  street: string;
  @Field({ nullable: true })
  houseNumber: string;
  @Field({ nullable: true })
  postCode: string;
  @Field({ nullable: true })
  place: string;
  @Field({ nullable: true })
  additionalHouseNumber: string;
  @Field({ nullable: true }) 
  land:string;
}
