import { HttpModule, Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import queryComplexity, {
  fieldExtensionsEstimator,
  simpleEstimator,
} from 'graphql-query-complexity';
import { AuthGuard, KeycloakConnectModule, PolicyEnforcementMode, ResourceGuard, RoleGuard } from 'nest-keycloak-connect';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import CONFIG from './config/config';
import { InvoicesModule } from './invoices/invoices.module';

@Module({
  imports: [HttpModule,

    KeycloakConnectModule.register({
      authServerUrl: CONFIG.KEYCLOAK_URL,
      realm: CONFIG.KEYCLOAK_REALM,
      clientId: CONFIG.KEYCLOAK_CLIENT,
      secret: CONFIG.KEYCLOAK_CLIENT_SECRET,
      // optional if you want to retrieve JWT from cookie
      // cookieKey: 'KEYCLOAK_JWT',
      // optional loglevels. default is verbose

      logLevels: ['warn'],
      // optional useNestLogger, uses the logger from app.useLogger() implementation
      useNestLogger: true,
      // optional, already defaults to permissive
      // policyEnforcement: PolicyEnforcementMode.PERMISSIVE
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      context: ({ req }) => ({ req }),
      debug: true,
      playground: true,
      path: '/invoices',
      formatError: (error) => {
        const graphQLFormattedError = {
          message:
            error.extensions?.exception?.response?.message || error.message,
          code:
            error.extensions?.exception?.status?.status ||
            error.extensions?.exception?.status ||
            'SERVER_ERROR',
          name: error.extensions?.exception?.status?.response || error.name,
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
    }),
    InvoicesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // AuthRoleService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    // {
    //   provide: APP_GUARD,
    //   useClass: ResourceGuard,
    // },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    }
  ]
})
export class AppModule { }
