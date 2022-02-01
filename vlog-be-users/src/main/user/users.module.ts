import { HttpModule, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { MongooseModule } from '@nestjs/mongoose';

import { ClientsModule, Transport } from "@nestjs/microservices"
import { UserProfileSchema, RoleSchema } from './entities/user.schema';
import { AuthRoleService } from 'src/auth/authrole/authRole.service';
import { AuthRoleModule } from 'src/auth/authrole/authRole.module';
import { VlogSchema } from '../vlog/entities/vlog.schema';
import { EmailSubscriberSchema } from './entities/email.subscribers.entity'
import { DocumentsSchema } from '../documents/entities/document.entity';
import { DocumentsModule } from '../documents/documents.module';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [HttpModule, AuthRoleModule,
    DocumentsModule,
    BullModule.registerQueue({
      name: 'documentQueue',
    }),
    BullModule.registerQueue({
      name: 'vlogQueue',
    }),
    BullModule.registerQueue({
      name: 'vlogQueueRemove',
    }),
    MongooseModule.forFeature([
      { name: 'User', schema: UserProfileSchema },
      { name: 'Role', schema: RoleSchema },
      { name: 'Document', schema: DocumentsSchema },
      { name: 'Vlog', schema: VlogSchema },
      { name: 'EmailSubscriber', schema: EmailSubscriberSchema },
      // { name: UserProfileEntity.name, schema: UserProfileSchema },
    ]),

     //["Microservices RabbitMQ Configurations start here"]

    // ClientsModule.register([
    //   {
    //     name: 'APPLICATION_SERVICE', 
    //     transport: Transport.RMQ,
    //     options: {
    //       urls: ['amqp://guest:guest@127.0.0.1:5672'],
    //       queue: 'default',
    //       queueOptions: {
    //         durable: false
    //       }
    //     },
    //   },

    // ]),

     //["Microservices RabbitMQ Configurations start here"]
  ],
  providers: [UsersResolver, UsersService],
  exports: [UsersService],
})
export class UsersModule { }
