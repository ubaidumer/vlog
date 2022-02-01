import { Module } from '@nestjs/common';
import { VlogService } from './vlog.service';
import { VlogResolver } from './vlog.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { VlogSchema } from './entities/vlog.schema';
import { UserProfileSchema } from '../user/entities/user.schema';
import { BullModule } from '@nestjs/bull';
@Module({
  imports: [
    BullModule.registerQueue({
      name: 'vlogQueue',
    }),
    MongooseModule.forFeature([
      { name: 'Vlog', schema: VlogSchema },
      { name: 'User', schema: UserProfileSchema },
    ])
  ],
  providers: [VlogResolver, VlogService],
  exports: [VlogService]
})
export class VlogModule { }
