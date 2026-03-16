import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { CartItem } from './entities/cart-item.entity';
import { Cat } from '../cat/entities/cat.entity';
import { CartDatabaseModule } from './cart-database.module';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';

const connectionName = 'cart';

@Module({
  imports: [
    CartDatabaseModule,
    TypeOrmModule.forFeature([Cart, CartItem, Cat], connectionName),
  ],
  providers: [CartService],
  controllers: [CartController],
})
export class CartModule {}
