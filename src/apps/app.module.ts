import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CatServiceModule } from './cat-service/cat-service.module';
import { UserServiceModule } from './user-service/user-service.module';
import { OrderServiceModule } from './order-service/order-service.module';

@Module({
  imports: [
    DatabaseModule,
    CatServiceModule,
    UserServiceModule,
    OrderServiceModule,
  ],
})
export class AppModule {}
