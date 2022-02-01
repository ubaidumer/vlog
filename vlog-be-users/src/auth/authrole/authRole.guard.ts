import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  HttpService,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UserprofileInput } from 'src/main/user/dto/userprofile.input';
import { AuthRoleService } from './authRole.service';
const qs = require('querystring')
@Injectable()
export class AuthRoleGuard implements CanActivate {
  constructor(private readonly authRoleService: AuthRoleService) { }
  async canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context).getContext();
    const args: UserprofileInput = GqlExecutionContext.create(context).getArgs();
    const authHeader = ctx.req.headers.authorization
    const argsData = JSON.parse(JSON.stringify(args))
    console.log("args data", argsData.createUser.role.name)
    try {
      if (!authHeader) {
        return false;
      }
      const responsedata = await this.authRoleService.accessRole(
        authHeader,
      );
      console.log("response data", responsedata.data)
      if (responsedata.status === 401 || responsedata.status === '401') {
        throw new UnauthorizedException("Unauthorized")
      }
      if (responsedata.status === 200 || responsedata.status === '200') {
        if (responsedata.data.name !== argsData.createUser.role.name) {
          return false;
        }
        return true;
      }

    } catch (error) {
      console.log(error);
    }
    // ctx.user = await this.validateToken(ctx.headers.authorization);
  }

}
