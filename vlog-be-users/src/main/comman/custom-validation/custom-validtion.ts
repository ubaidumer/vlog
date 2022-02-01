
import { ExecutionContext } from '@nestjs/common';
import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { AuthHeader } from '../custom-decorator/custom-decorator';



export function IsLongerThan(property: string, validationOptions?: ValidationOptions) {
    console.log("Islonger called ")
  return function (object: Object, propertyName: string) {
    
      console.log("Islonger called ")
    registerDecorator({
      name: 'isLongerThan',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
            console.log("object", object,"prpertty",property)
            console.log("custom validation decorator ", args)
            // console.log("constraint", cons)
          const [relatedPropertyName] = args.constraints;
          const relatedValue = (args.object as any)[relatedPropertyName];
          console.log("relative value", relatedValue)
          return typeof value === 'string' && typeof relatedValue === 'string' && value.length > relatedValue.length; // you can return a Promise<boolean> here as well, if you want to make async validation
        },
      },
    });
  };
}