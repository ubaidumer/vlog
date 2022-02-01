import { HttpModule, Module } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { DocumentsResolver } from './documents.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { DocumentsSchema } from './entities/document.entity';
import { DocumentsTypeSchema } from './entities/documentType.entity';
import { RoleSchema, UserProfileSchema } from '../user/entities/user.schema';
import { UsersService } from '../user/users.service';
import { UsersResolver } from '../user/users.resolver';
import { AuthRoleModule } from 'src/auth/authrole/authRole.module';
import { VlogSchema } from '../vlog/entities/vlog.schema';
import { EmailSubscriberSchema } from '../user/entities/email.subscribers.entity';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [HttpModule,AuthRoleModule,
    BullModule.registerQueue({
      name: 'documentQueue',
    }),
    BullModule.registerQueue({
      name: 'documentDeleteQueue',
    }),
    BullModule.registerQueue({
      name: 'vlogQueueRemove',
    }),
    MongooseModule.forFeature([
    { name: 'Document', schema: DocumentsSchema },
    { name: 'DocumentType', schema: DocumentsTypeSchema },
    { name: 'User', schema: UserProfileSchema },
    { name: 'Vlog', schema: VlogSchema },
    { name: 'EmailSubscriber', schema: EmailSubscriberSchema },
  
  ])],
  providers: [DocumentsResolver, DocumentsService,UsersResolver,UsersService],
  exports: [DocumentsService,UsersService]

})
export class DocumentsModule { }
