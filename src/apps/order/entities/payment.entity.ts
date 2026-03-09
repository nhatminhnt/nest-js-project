import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PaymentProvider } from '../../../libs/common/enums';
import { Order } from './order.entity';

@Entity({ name: 'payments' })
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Order, (order) => order.payments, {
    onDelete: 'CASCADE',
  })
  order: Order;

  @Column({
    type: 'enum',
    enum: PaymentProvider,
  })
  provider: PaymentProvider;

  @Column({ name: 'transaction_id' })
  transactionId: string;

  @Column({ type: 'numeric' })
  amount: number;

  @Column()
  status: string;

  @CreateDateColumn({ name: 'paid_at' })
  paidAt: Date;
}
