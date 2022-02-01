import {
    CanActivate,
    ExecutionContext,
    HttpException,
    HttpStatus,
    Injectable,
    Logger,
} from '@nestjs/common';

import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class DateOfBirthGuard implements CanActivate {
    async canActivate(context: ExecutionContext,): Promise<boolean> {
        const ctx = GqlExecutionContext.create(context).getContext();
        const args = GqlExecutionContext.create(context).getArgs();
        return true
    }
}
