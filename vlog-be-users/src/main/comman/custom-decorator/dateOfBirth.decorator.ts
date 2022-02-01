import {createParamDecorator, ExecutionContext, HttpException, HttpStatus} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const DateOfBirth = createParamDecorator(
    (data, context: ExecutionContext) => {
        const ctx = GqlExecutionContext.create(context).getContext();
        const args = GqlExecutionContext.create(context).getArgs();
        // console.log("Header", ctx.req.headers)
        console.log("args", args)
        if(!ctx.req.headers.authorization){
            throw new HttpException("Authorization token is not provided", HttpStatus.HTTP_VERSION_NOT_SUPPORTED)
        }
        return ctx.req.headers.authorization;

    },
);