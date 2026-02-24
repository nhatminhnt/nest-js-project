import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { OrderServiceModule } from './apps/order-service/order-service.module';

async function bootstrap() {
  const app = await NestFactory.create(OrderServiceModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
  });

  const config = new DocumentBuilder()
    .setTitle('Order Service')
    .setDescription('Order service API')
    .setVersion('1.0')
    .addTag('orders')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.startAllMicroservices();
  await app.listen(process.env.ORDER_HTTP_PORT ?? 3001);
}

bootstrap().catch((err) => {
  console.error('Order service bootstrap failed', err);
  process.exit(1);
});
