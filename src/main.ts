import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';

/**
 * The main function to bootstrap the application
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(helmet());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap().then(() =>
  console.log(
    'Server is running on :',
    process.env.NODE_ENV ?? 'development',
    'mode at port :',
    process.env.PORT ?? 3000,
  ),
);
