import { HttpModule, Module } from '@nestjs/common';
import { AuthRoleGuard } from './authRole.guard';
import { AuthRoleService } from './authRole.service';

@Module({
  imports: [HttpModule],
  providers: [AuthRoleGuard, AuthRoleService],
  exports: [AuthRoleService],
})
export class AuthRoleModule {}
