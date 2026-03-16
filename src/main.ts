import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';
import { ApiGatewayModule } from './apps/api-gateway/api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  app.use(cookieParser());

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
  });

  const config = new DocumentBuilder()
    .setTitle('Gateway API')
    .setDescription('HTTP gateway for microservices')
    .setVersion('1.0')
    .addTag('cats')
    .addTag('orders')
    .addTag('users')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.startAllMicroservices();

  const port = process.env.HTTP_PORT ?? 3000;
  await app.listen(port);

  console.log(`Gateway is running on http://localhost:${port}`);
}

bootstrap().catch((err) => {
  console.error('Gateway bootstrap failed', err);
  process.exit(1);
});
