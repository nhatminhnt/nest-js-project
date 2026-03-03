import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './apps/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Gateway API')
    .setDescription('HTTP gateway for microservices')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = process.env.HTTP_PORT ?? 3000;
  await app.listen(port);

  console.log(`Gateway is running on http://localhost:${port}`);
}

bootstrap().catch((err) => {
  console.error('Gateway bootstrap failed', err);
  process.exit(1);
});
