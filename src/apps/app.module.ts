import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CatServiceModule } from './cat-service/cat-service.module';
import { UserServiceModule } from './user-service/user-service.module';
import { OrderServiceModule } from './order-service/order-service.module';
import { LoggerMiddleware } from '../libs/common/src/middlewares/logger.middleware';
import { RequestIdMiddleware } from '../libs/common/src/middlewares/request-id.middleware';

@Module({
  imports: [
    DatabaseModule,
    CatServiceModule,
    UserServiceModule,
    OrderServiceModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestIdMiddleware, LoggerMiddleware).forRoutes('*');
  }
}
