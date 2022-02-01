import { Extensions, Field, InputType, ObjectType } from '@nestjs/graphql';
import { loggerMiddleware } from '../../comman/middleware/field.middleware';
import { Matches, MinLength } from 'class-validator';
enum Role {
  admin = 'admin',
  endUser = 'endUser',
  client = 'client',
}
@InputType()
export class RolesInput {
  @Field({ nullable: true })
  id: string;

  @Field()
  @MinLength(3)
  name: string;
  // @Matches(/(?=.*\Admin+ User+Enduser)/, {
  //   message: 'Role should contain specfic word Like Admin, User , Enduser',
  // })
}

@ObjectType()
export class RolesDto {
  @Field()
  id: string;
  @Field()
  name: string;
}
