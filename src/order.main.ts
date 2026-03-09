import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { OrderModule } from './apps/order/order.module';

async function bootstrap() {
  const app = await NestFactory.create(OrderModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
  });

  const config = new DocumentBuilder()
    .setTitle('Order')
    .setDescription('Order API')
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
