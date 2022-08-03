import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Project Dark Machinery API')
    .setDescription('API of the Project Dark Machinery Web site')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  app.enableCors({
    origin: process.env.FRONT_ORIGIN,
    credentials: true,
  });

  app.use(cookieParser());

  await app.listen(4000);
}
bootstrap();
