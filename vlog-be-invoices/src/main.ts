import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import bodyParser from 'body-parser';
import { ValidationError } from 'class-validator';
import { AppModule } from './app.module';
// const schema = require("./schema");
import { ValidationException } from './comman/validation.exception';
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(5001);
    app.useGlobalPipes(
      new ValidationPipe({
        exceptionFactory: () => (errors: ValidationError[]) => {
          const messages = errors.map(
            (error) => `${error.property} has wrong value ${error.value},
              ${Object.values(error.constraints).join(', ')}`,
          );
          return new ValidationException(messages);
        },
      }),
    );
  
}
bootstrap();
