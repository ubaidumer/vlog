import { Field, Int, InputType, ObjectType } from '@nestjs/graphql';


@ObjectType()
export class adminDasboardDTO {
  @Field({ nullable: true })
  getCurrentDateApplicationsRequest: number;
  @Field({ nullable: true })
  getRegisteredApplications: number;
  @Field({ nullable: true })
  getTotalApplications: number;
  @Field({ nullable: true })
  getHouses: number;
  @Field({ nullable: true })
  getReviewedHouses: number;
  @Field({ nullable: true })
  getPublishedHouses: number;
  @Field({ nullable: true })
  getEnduser: number;
  @Field({ nullable: true })
  getClient: number;
  @Field({ nullable: true })
  getActiveUser: number;
}
