import { Field, Int, InputType, OmitType } from '@nestjs/graphql';
import {
  IsEmail,
  Matches,
  MinLength,
  IsDate,
  IsDateString,
  MinDate,
  IsNumber,
  ValidateIf,
  IsNotEmpty,
  Validate,
  IsString,
  IsDefined,
} from 'class-validator';
import { AddressDto } from './address.dto';
import { RolesInput } from './roles.input';
import { VALIDATION_MESSAGES } from '../../../locale/index'
import { classToPlain, Exclude, Expose, Transform, Type } from 'class-transformer';
import { ConfigurationFile } from 'src/locale/eng/Configuration.file';
import { AuthHeader } from 'src/main/comman/custom-decorator/custom-decorator';
import { loggerMiddleware } from 'src/main/comman/middleware/field.middleware';
import { IsLongerThan } from 'src/main/comman/custom-validation/custom-validtion';
import { CustomTextLength } from 'src/main/comman/custom-validation/custom.class';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import VALIDATION_MESSAGES_ENG from 'src/locale/eng/validation_messages';
import VALIDATION_MESSAGES_NL from 'src/locale/nl/validation_messages';
import { RequestHeader } from 'src/main/comman/custom-validation/Request.header';
const configuration = ConfigurationFile
enum Status {
  Student = 'Student',
  Entrepreneur = 'Entrepreneur',
  Employed = 'Employed',
}

var Headerlanguages = { ...VALIDATION_MESSAGES_ENG };
var lang;

@InputType()
class vlogDetailInput {
  @Field()
  vlogDescription: string
}
@InputType()
export class AddressInput {

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
  land: string;
}


@InputType()
class UserprofileInput {

  @Field({ nullable: true })
  _id?: string;

  @Field()
  firstName: string;

  @Field({nullable:true})
  lastName: string;

  username: string;
  @Field({ nullable: true, })

  @ValidateIf(o => o.languages === 'eng' || o.languages === 'dutch')
  @Validate(CustomTextLength)
  @Transform(value => value.value)
  @Matches(/[a-zA-Z0-9]{8,}/, {
    message: true ? VALIDATION_MESSAGES_ENG.PASSWORD_MUST_BE_8_LETTERS : VALIDATION_MESSAGES_NL.PASSWORD_MUST_BE_8_LETTERS
  })

  password: string;


  @Field()
  mobileNumber: string;

  // @Matches(/(?=.*\.)/, {
  //   message: VALIDATION_MESSAGES.EMAIL_VALIDATION_DOT
  // })
  // @Matches(/(?=.*\@)/, {
  //   message: VALIDATION_MESSAGES.EMAIL_MUST_CONTAIN_AT_SIGN
  // })
  @Field()
  email: string;

  @Field({ nullable: true })
  @Type(() => Date)
  // @IsDate()
  dateOfBirth: Date;

  // @MinLength(3)
  @Field({ nullable: true })
  street: string;

  // @MinLength(3)
  @Field({ nullable: true })
  houseNumber?: string;

  // @MinLength(3)
  @Field({ nullable: true })
  postCode: string;

  // @MinLength(3)
  @Field({ nullable: true })
  place: string;

  @Field({ nullable: true })
  additionalHouseNumber: string;

  @Field({ nullable: true })
  land: string;

  ///address [End here] ////
  @Field({ nullable: true })
  companyName: string;

  @Field({ nullable: true })
  landlinePhone: string;

  // @MinLength(3)
  @Field({ nullable: true })
  status: number;


  // @Field()
  // profession: number;

  @Field({ nullable: true })
  profession: string;

  @Field({ nullable: true })
  shortDescription: string;

  @Field({ nullable: true })
  profilePicturePath: string;

  // @Field((type) => AddressInput, { nullable: true })
  address: AddressInput;

  @Field(type => Int, { nullable: true })
  role?: Number

  @Field({ nullable: true })
  profileCompletion: string;


  @Field(type => Int, { nullable: true , defaultValue: 0})
  isDeleted: number;

  applicantAge: Number;
  // @Field((type) => String, { nullable: true })
  vlogDescription: string;

  @Field({nullable:true})
  deActiveDate:Date;

  @Field({nullable:true})
  isDeActivated:boolean;


}

@InputType()
class sortColumnInput {
  sortColumn: [[any]]
}

export {
  sortColumnInput,
  UserprofileInput
}
