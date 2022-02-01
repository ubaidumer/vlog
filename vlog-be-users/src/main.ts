import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app1 = await NestFactory.create(AppModule);
  app1.enableCors();
  app1.listen(2000);
}
bootstrap();

