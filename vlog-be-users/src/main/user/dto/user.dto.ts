import {
  Field,
  ObjectType,
  Int,
  InputType,
  Extensions,

  OmitType,
  InputTypeOptions,
} from '@nestjs/graphql';
import {
  MinLength,
  isEmail,
  IsNotEmpty,
  IsEmail,
  Matches,
  IsDate,
} from 'class-validator';
import { AddressDto } from './address.dto';
import { type } from 'os';
import { loggerMiddleware, dateOfBirthMiddleware } from '../../comman/middleware/field.middleware';
import { RolesDto } from './roles.input';
import { DateOfBirth } from "../../comman/custom-decorator/dateOfBirth.decorator";
import { Transform, Type } from 'class-transformer';
enum Status {
  Student = 'Student',
  Entrepreneur = 'Entrepreneur',
  Employed = 'Employed',
}
enum Role {
  Admin = 'Admin',
  User = 'User',
  EndUser = 'endUser',
}
@ObjectType()
class vlogDetailDto {
  @Field()
  vlogDescription: string
}

@ObjectType()
 class UserDto {
  @Field({ nullable: true })
  _id?: string;

  @Field({ nullable: true })
  userId?: Number;

  @Field({ nullable: true })
  firstName: string;

  @Field({ nullable: true })
  lastName: string;

  @Field((type) => String, { nullable: true })
  username: string;

  @Field({ nullable: true })
  mobileNumber: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true, middleware: [dateOfBirthMiddleware] })
  @Type(() => Date)
  @IsDate()
  dateOfBirth: Date;

  @Field( {nullable:true})
  shortDescription: string;
  ///address [End here] ////
  street: string;
  @Field({ nullable: true })
  houseNumber?: string;
  postCode: string;
  place: string;
  additionalHouseNumber: string; 
  land:string;

  ///address [End here] ////
  @Field({nullable:true})
  companyName: string; 

  @Field({nullable:true})
  landlinePhone: string;

  @Field({ nullable: true })
  status: Number;


  @Field({ nullable: true })
  profession: string;

  @Field({ nullable: true })
  profilePicturePath: string;

  @Field((type) => AddressDto, { nullable: true })
  address: AddressDto;

  @Field(type => Int, { nullable: true })
  role?: Number

  @Field((type) => String, { nullable: true })
  vlogDescription: string;

  @Field({ nullable: true })
  profileCompletion: string;

  @Field((type) => Number,{ nullable: true })
  applicantAge: Number;

  @Field({nullable:true})
  createdAt?: string;


  @Field({nullable:true})
  updatedAt?: string;


  @Field({nullable:true})
  createdById?:String;

  @Field({nullable:true})
  updatedById?:String;

  @Field(type=>Int, {nullable:true})
  isDeleted: number;

  @Field({nullable:true})
  deActiveDate:Date;

  @Field({nullable:true, defaultValue:false})
  isDeActivated:boolean;
}


@ObjectType()
class DataAndPaginationDTO {
    @Field(type=>[UserDto])
    data:UserDto[];
    
    @Field(type=>Int, {nullable:true})
    totalCount?: number = 0;
}

@ObjectType()
class UserPasswordUpdateDTO {
   
  @Field(type=>String)
  _id: string;

  @Field(type=>String)
  password: string;

  @Field(type=>String)
  newPassword: string;

}
export {
  UserDto,
  DataAndPaginationDTO,
  UserPasswordUpdateDTO
}
