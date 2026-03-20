import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  PaymentProvider,
  PaymentStatus,
  Currency,
  PaymentMethod,
} from '../../../libs/common/enums';
import { Payment } from '../entities/payment.entity';

export class PaymentResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  orderId: string;

  @ApiProperty()
  amount: number;

  @ApiProperty({ enum: PaymentProvider })
  provider: PaymentProvider;

  @ApiProperty({ enum: PaymentStatus })
  status: PaymentStatus;

  @ApiProperty({ enum: Currency })
  currency: Currency;

  @ApiProperty({ enum: PaymentMethod })
  paymentMethod: PaymentMethod;

  @ApiPropertyOptional()
  description?: string;

  @ApiPropertyOptional()
  returnUrl?: string;

  @ApiPropertyOptional()
  customerEmail?: string;

  @ApiPropertyOptional()
  transactionId?: string;

  @ApiPropertyOptional()
  metadata?: Record<string, any>;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(payment: Payment) {
    this.id = payment.id;
    this.orderId = payment.orderId;
    this.amount = Number(payment.amount);
    this.provider = payment.provider;
    this.status = payment.status;
    this.currency = payment.currency;
    this.paymentMethod = payment.paymentMethod;
    this.description = payment.description;
    this.returnUrl = payment.returnUrl;
    this.customerEmail = payment.customerEmail;
    this.transactionId = payment.transactionId;
    this.metadata = payment.metadata;
    this.createdAt = payment.createdAt;
    this.updatedAt = payment.updatedAt;
  }
}
