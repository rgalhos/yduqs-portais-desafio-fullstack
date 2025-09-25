import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.useGlobalPipes(new ValidationPipe());

  const isDev = configService.get('NODE_ENV') === 'development';
  const exposeSwagger = configService.get('EXPOSE_SWAGGER') === 'true';
  if (isDev || exposeSwagger) {
    const docsConfig = new DocumentBuilder()
      .setTitle('YDUQS Portal API Documentation')
      .setDescription('This is the documentation of the YDUQS Portal API')
      .setVersion('0.1')
      .build();

    const documentFactory = () => SwaggerModule.createDocument(app, docsConfig);
    SwaggerModule.setup('docs', app, documentFactory);
  }

  const port = Number(configService.get('PORT', 3050));
  await app.listen(port);
}

bootstrap();
