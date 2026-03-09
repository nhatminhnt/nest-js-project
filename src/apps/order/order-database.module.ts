import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { Payment } from './entities/payment.entity';

const connectionName = 'order';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: connectionName,
      type: 'postgres',
      host: process.env.DB_ORDER_HOST ?? process.env.DB_MASTER_HOST,
      port: Number(
        process.env.DB_ORDER_PORT ?? process.env.DB_MASTER_PORT ?? 5432,
      ),
      username: process.env.DB_ORDER_USERNAME ?? process.env.DB_MASTER_USERNAME,
      password: process.env.DB_ORDER_PASSWORD ?? process.env.DB_MASTER_PASSWORD,
      database: process.env.DB_ORDER_DATABASE ?? process.env.DB_MASTER_DATABASE,
      entities: [Order, OrderItem, Payment],
      autoLoadEntities: false,
      synchronize: process.env.DB_SYNCHRONIZE !== 'false',
      logging: process.env.DB_LOGGING === 'true',
    }),
  ],
})
export class OrderDatabaseModule {}
