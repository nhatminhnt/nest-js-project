import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { CatServiceModule } from '../cat-service/cat-service.module';
import { UserServiceModule } from '../user-service/user-service.module';
import { OrderServiceModule } from '../order-service/order-service.module';
import { LoggerMiddleware } from '../../libs/common/src/middlewares/logger.middleware';
import { RequestIdMiddleware } from '../../libs/common/src/middlewares/request-id.middleware';
import { AuthServiceModule } from '../auth-service/auth-service.module';
import { BreedServiceModule } from '../breed-service/breed-service.module';

@Module({
  imports: [
    DatabaseModule,
    CatServiceModule,
    UserServiceModule,
    OrderServiceModule,
    BreedServiceModule,
    AuthServiceModule,
  ],
})
export class ApiGatewayModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestIdMiddleware, LoggerMiddleware).forRoutes('*');
  }
}
