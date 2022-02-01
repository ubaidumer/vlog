import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './main/user/users.module';
import { ConfigModule } from '@nestjs/config';
import CONFIG from './config/config';
import queryComplexity, {
  fieldExtensionsEstimator,
  simpleEstimator,
} from 'graphql-query-complexity';
import {
  AuthGuard,
  KeycloakConnectModule,
  PolicyEnforcementMode,
  ResourceGuard,
  RoleGuard,
} from 'nest-keycloak-connect';
import { APP_GUARD } from '@nestjs/core';
import { AuthRoleModule } from './auth/authrole/authRole.module';
import { AuthRoleService } from './auth/authrole/authRole.service';
import { DocumentsModule } from './main/documents/documents.module';
import { VlogModule } from './main/vlog/vlog.module';
import { loggerMiddleware } from './main/comman/middleware/field.middleware';
import { BullModule } from '@nestjs/bull';
import { DocumentsCopyConsumer } from './main/user/queue.consumer';
import { vlogRemoveConsumer } from './main/vlog/vlog-consumer';
import { DocumentsDeleteConsumer } from './main/documents/documents.queue.delete';
@Module({
  imports: [
    HttpModule,
    BullModule.forRoot({
      redis: {
        host: CONFIG.REDIS_HOST,
        port: CONFIG.REDIS_PORT,
        password: CONFIG.REDIS_PASSWORD,
      },
    }),
    BullModule.registerQueue({
      name: 'documentQueue',
    }),
    BullModule.registerQueue({
      name: 'vlogQueue',
    }),
    BullModule.registerQueue({
      name: 'documentDeleteQueue',
    }),
    KeycloakConnectModule.register({
      authServerUrl: CONFIG.KEYCLOAK_URL,
      realm: CONFIG.KEYCLOAK_REALM,
      clientId: CONFIG.KEYCLOAK_CLIENT,
      secret: CONFIG.KEYCLOAK_CLIENT_SECRET,
      // optional if you want to retrieve JWT from cookie
      cookieKey: 'KEYCLOAK_JWT',
      // optional loglevels. default is verbose
      logLevels: ['warn'],
      // optional useNestLogger, uses the logger from app.useLogger() implementation
      useNestLogger: true,
      // optional, already defaults to permissive
      // policyEnforcement: PolicyEnforcementMode.PERMISSIVE
    }),
    GraphQLModule.forRoot({
      buildSchemaOptions: {
        fieldMiddleware: [loggerMiddleware],
      },
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      context: ({ req }) => ({ req }),
      debug: true,
      playground: true,
      path:'/users',
      formatError: (error) => {
        console.log(error);
        const graphQLFormattedError = {
          message:
            error.extensions?.exception?.response?.message || error.message,
          code:
            error.extensions?.exception?.status?.status ||
            error.extensions?.exception?.status ||
            'SERVER_ERROR',
          name:error.extensions?.exception?.response || error.extensions?.exception?.status?.response || error.name,
        };
        return graphQLFormattedError;
      },
      validationRules: [
        queryComplexity({
          maximumComplexity: 100,
          variables: {},
          onComplete: (complexity: number) => {
            console.log('Query Complexity:', complexity);
          },
          estimators: [
            fieldExtensionsEstimator(),

            simpleEstimator({
              defaultComplexity: 1,
            }),
          ],
        }) as any,
      ],
    }),
    MongooseModule.forRoot(CONFIG.MONGODB_URL, {
      useCreateIndex: true,
      autoIndex: true,
    }),
    AuthRoleModule,
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    VlogModule,
    DocumentsModule,
  ],
  controllers: [AppController],
  providers: [
    DocumentsCopyConsumer,
    vlogRemoveConsumer,
    DocumentsDeleteConsumer,
    AppService,
    AuthRoleService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    // This adds a global level resource guard, which is permissive.
    // Only controllers annotated with @Resource and methods with @Scopes
    // are handled by this guard.
    // {
    //   provide: APP_GUARD,
    //   useClass: ResourceGuard,
    // },
    // New in 1.1.0
    // This adds a global level role guard, which is permissive.
    // Used by `@Roles` decorator with the optional `@AllowAnyRole` decorator for allowing any
    // specified role passed.
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
})
export class AppModule {}
