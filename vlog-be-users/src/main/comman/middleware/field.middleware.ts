import {
  FieldMiddleware,
  GqlExecutionContext,
  MiddlewareContext,
  NextFn,
} from '@nestjs/graphql';
import {
    ForbiddenException,
    BadRequestException,
    ExecutionContext,
    createParamDecorator, Injectable, NestMiddleware,
} from '@nestjs/common';
import { UserDto } from '../../user/dto/user.dto';
import { ERROR_MESSAGES } from 'src/locale';
import { DateOfBirth } from '../custom-decorator/dateOfBirth.decorator';



const loggerMiddleware: FieldMiddleware = async (
  ctx: MiddlewareContext,
  next: NextFn,
) => {
  const value = await next();
  // return value?.toUpperCase();;
  const { info, context, args, source } = ctx;
  const { extensions } = info.parentType.getFields()[info.fieldName];
  // return '';
  if (extensions.role) {
    // or just "return null" to ignore
   return ''
    // strreplace("XXXXX", info.fieldName, FIELD_NOT_ACCESSIBLE)
    // throw new ForbiddenException(
    //   `User does not have sufficient permissions to access "${info.fieldName}" field.`,
    // );
  }
  // const FIELD_NOT_ACCESSIBLE = "The XXXXX field is not accessible";
  //     {
  //       "FIELD_NOT_ACCESSIBLE" = "The XXXXX field is not accessible";
  //     }
  // return value;
};
const dateOfBirthMiddleware: FieldMiddleware = async (
    ctx: MiddlewareContext,
    next: NextFn,
) => {
    const value = await next();
    const dateOfBirth = new Date(value).toUTCString().slice(5,16);
    console.log(`${dateOfBirth}`)
    return value;
};
 

export { loggerMiddleware, dateOfBirthMiddleware };
