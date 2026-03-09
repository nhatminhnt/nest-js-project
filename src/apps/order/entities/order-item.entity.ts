import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './order.entity';

@Entity({ name: 'order_items' })
export class OrderItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Order, (order) => order.items, { onDelete: 'CASCADE' })
  order: Order;

  @Column({ name: 'cat_id', type: 'uuid' })
  catId: string;

  @Column({ name: 'price_snapshot', type: 'numeric' })
  priceSnapshot: number;
}
