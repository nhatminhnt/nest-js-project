import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderStatus, PaymentStatus } from '../../../libs/common/enums';
import { User } from '../../user-service/entities/user-service.entity';
import { OrderItem } from './order-item.entity';
import { Payment } from './payment.entity';

@Entity({ name: 'orders' })
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.orders, { nullable: false })
  user: User;

  @Column({ name: 'total_amount', type: 'numeric' })
  totalAmount: number;

  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.PENDING,
  })
  status: OrderStatus;

  @Column({ name: 'payment_method', nullable: true })
  paymentMethod: string | null;

  @Column({
    name: 'payment_status',
    type: 'enum',
    enum: PaymentStatus,
    default: PaymentStatus.UNPAID,
  })
  paymentStatus: PaymentStatus;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @OneToMany(() => OrderItem, (item: OrderItem) => item.order, {
    cascade: true,
  })
  items: OrderItem[];

  @OneToMany(() => Payment, (payment: Payment) => payment.order)
  payments: Payment[];
}
