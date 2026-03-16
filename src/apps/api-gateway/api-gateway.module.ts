import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CatModule } from '../cat/cat.module';
import { UserModule } from '../user/user.module';
import { OrderModule } from '../order/order.module';
import { LoggerMiddleware } from '../../libs/common/src/middlewares/logger.middleware';
import { RequestIdMiddleware } from '../../libs/common/src/middlewares/request-id.middleware';
import { AuthModule } from '../auth/auth.module';
import { BreedModule } from '../breed/breed.module';
import { CartModule } from '../cart/cart.module';

@Module({
  imports: [
    CatModule,
    UserModule,
    OrderModule,
    BreedModule,
    AuthModule,
    CartModule,
  ],
})
export class ApiGatewayModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestIdMiddleware, LoggerMiddleware).forRoutes('*');
  }
}
