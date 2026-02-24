import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { CatServiceModule } from './apps/cat-service/cat-service.module';

async function bootstrap() {
  const app = await NestFactory.create(CatServiceModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
  });

  const config = new DocumentBuilder()
    .setTitle('Cat Service')
    .setDescription('Cat service API')
    .setVersion('1.0')
    .addTag('cats')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.startAllMicroservices();
  await app.listen(process.env.CAT_HTTP_PORT ?? 3003);
}

bootstrap().catch((err) => {
  console.error('Cat service bootstrap failed', err);
  process.exit(1);
});
