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
import { ERROR_MESSAGES } from 'src/locale';



export const loggerMiddleware: FieldMiddleware = async (
  ctx: MiddlewareContext,
  next: NextFn,
) => {
  const value = await next();
  // return value?.toUpperCase();;
  const { info, context, args, source } = ctx;
  const { extensions } = info.parentType.getFields()[info.fieldName];
  // return '';
  if (extensions.role) {
   return '';
  }

};