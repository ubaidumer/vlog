import { Field, Int, InputType, OmitType } from '@nestjs/graphql';
import {
  Matches,
  ValidateIf,
  Validate,
} from 'class-validator';
import { classToPlain, Exclude, Expose, Transform, Type } from 'class-transformer';
import { ConfigurationFile } from 'src/locale/eng/Configuration.file';
import { CustomTextLength } from 'src/main/comman/custom-validation/custom.class';
import VALIDATION_MESSAGES_ENG from 'src/locale/eng/validation_messages';
import VALIDATION_MESSAGES_NL from 'src/locale/nl/validation_messages';
const configuration = ConfigurationFile
enum Status {
  Student = 'Student',
  Entrepreneur = 'Entrepreneur',
  Employed = 'Employed',
}

var Headerlanguages = { ...VALIDATION_MESSAGES_ENG };
var lang;


@InputType()
class UserPasswordUpdate {
    
  @Field()
   _id?: string;
  

  @Field()
  @ValidateIf(o => o.languages === 'eng' || o.languages === 'dutch')
  @Validate(CustomTextLength)
  @Transform(value => value.value)
  @Matches(/[a-zA-Z0-9]{8,}/, {
    message: true ?  VALIDATION_MESSAGES_ENG.PASSWORD_MUST_BE_8_LETTERS : VALIDATION_MESSAGES_NL.PASSWORD_MUST_BE_8_LETTERS
  })
  password: string;

  @Field()
  oldPassword: string
}


export {
    UserPasswordUpdate
}