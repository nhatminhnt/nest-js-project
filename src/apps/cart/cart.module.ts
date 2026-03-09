import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { CartItem } from './entities/cart-item.entity';
import { CartDatabaseModule } from './cart-database.module';

const connectionName = 'cart';

@Module({
  imports: [
    CartDatabaseModule,
    TypeOrmModule.forFeature([Cart, CartItem], connectionName),
  ],
  providers: [],
  controllers: [],
})
export class CartModule {}
