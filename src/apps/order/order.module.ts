import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { Payment } from './entities/payment.entity';
import { OrderDatabaseModule } from './order-database.module';

const connectionName = 'order';

@Module({
  imports: [
    OrderDatabaseModule,
    TypeOrmModule.forFeature([Order, OrderItem, Payment], connectionName),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
