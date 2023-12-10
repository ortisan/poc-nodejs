import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from '@/app.module';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import otelSDK from './infrastructure/observability/instrumentation';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  await otelSDK.start();
  console.log('Started OTEL SDK');

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.useLogger(app.get(Logger));

  app.enableShutdownHooks();
  app.enableCors({ origin: '*' });
  // Validation
  app.useGlobalPipes(new ValidationPipe());

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Ortisan Capital APIs')
    .setDescription('The APIs of Ortisan Capital')
    .setVersion('1.0')
    .addTag('apis')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.APP_PORT || 8000, '0.0.0.0');
}

bootstrap();
