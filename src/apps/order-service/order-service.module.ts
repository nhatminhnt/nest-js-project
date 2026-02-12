import { Module } from '@nestjs/common';
import { OrderServiceService } from './order-service.service';
import { OrderServiceController } from './order-service.controller';

@Module({
  controllers: [OrderServiceController],
  providers: [OrderServiceService],
})
export class OrderServiceModule {}
