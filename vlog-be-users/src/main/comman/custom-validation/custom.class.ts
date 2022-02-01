import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments, Matches } from 'class-validator';
import VALIDATION_MESSAGES_ENG from 'src/locale/eng/validation_messages';
import VALIDATION_MESSAGES_NL from 'src/locale/nl/validation_messages';

@ValidatorConstraint({ name: 'languages', async: true })
export class CustomTextLength implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    const argsData = JSON.parse(JSON.stringify(args.object))

    console.log("json data", argsData.languages)
    return text === undefined; // for async validations you must return a Promise<boolean> here
  }
  defaultMessage(args: ValidationArguments) {
    // here you can provide default error message if validation failed
    return 'Text ($value) is too short or too long!';
  }
}
// @Matches(/[a-zA-Z0-9]{8,}/, {
  //   message: true ?  VALIDATION_MESSAGES_ENG.PASSWORD_MUST_BE_8_LETTERS : VALIDATION_MESSAGES_NL.PASSWORD_MUST_BE_8_LETTERS
  // })
  // @Matches(/(?:(?=.*\d))/, {
  //   message: Headerlanguages.PASS_MUST_BE_ONE_DIGIT
  // })
  // @Matches(/(?=.*[a-z])/, {
  //   message: Headerlanguages.PASS_MUST_BE_ONE_LOWER,
  // })
  // @Matches(/(?=.*[A-Z])/, {
  //   message: Headerlanguages.PASS_MUST_BE_ONE_UPPER
  // })
  // @Matches(/(?=.*\W+)/, {
  //   message: Headerlanguages.PASS_MUST_BE_ONE_SPECIAL
  // })
// @IsLongerThan('title', {
//   /* you can also use additional validation options, like "groups" in your custom validation decorators. "each" is not supported */
//   message: 'Text must be longer than the title',
// })