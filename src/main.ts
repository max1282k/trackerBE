import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.use(cookieParser());
  const config = new DocumentBuilder()
    .setTitle('avantlabs-backend-apis')
    .setDescription('avantlabs-backend-apis')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('apis')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  const PORT = 5050;

  await app.listen(PORT);

  console.log(`API is running on port ${PORT}`);
}
bootstrap();
