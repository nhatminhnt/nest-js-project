import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { UserModule } from './apps/user/user.module';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
  });

  const config = new DocumentBuilder()
    .setTitle('User')
    .setDescription('User API')
    .setVersion('1.0')
    .addTag('users')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.startAllMicroservices();
  await app.listen(process.env.USER_HTTP_PORT ?? 3002);
}

bootstrap().catch((err) => {
  console.error('User service bootstrap failed', err);
  process.exit(1);
});
