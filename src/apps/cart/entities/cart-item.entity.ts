import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Cart } from './cart.entity';
import { Cat } from '../../cat/entities/cat.entity';

@Entity({ name: 'cart_items' })
export class CartItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Cart, (cart) => cart.items, { onDelete: 'CASCADE' })
  cart: Cart;

  @ManyToOne(() => Cat, (cat) => cat.cartItems, { onDelete: 'CASCADE' })
  cat: Cat;

  @Column({ name: 'price_snapshot', type: 'numeric' })
  priceSnapshot: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
