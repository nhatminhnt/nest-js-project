import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { CartItem } from './entities/cart-item.entity';
import { Cat } from '../cat/entities/cat.entity';

const connectionName = 'cart';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: connectionName,
      type: 'postgres',
      host: process.env.DB_CART_HOST ?? process.env.DB_MASTER_HOST,
      port: Number(
        process.env.DB_CART_PORT ?? process.env.DB_MASTER_PORT ?? 5432,
      ),
      username: process.env.DB_CART_USERNAME ?? process.env.DB_MASTER_USERNAME,
      password: process.env.DB_CART_PASSWORD ?? process.env.DB_MASTER_PASSWORD,
      database: process.env.DB_CART_DATABASE ?? process.env.DB_MASTER_DATABASE,
      entities: [Cart, CartItem, Cat],
      autoLoadEntities: false,
      synchronize: process.env.DB_SYNCHRONIZE !== 'false',
      logging: process.env.DB_LOGGING === 'true',
    }),
  ],
})
export class CartDatabaseModule {}
