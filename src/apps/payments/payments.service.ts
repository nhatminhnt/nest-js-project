import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePaymentIntentDto } from './dto/create-payment-intent.dto';
import { ConfirmPaymentDto } from './dto/confirm-payment.dto';
import { Payment } from './entities/payment.entity';
import { PaymentStatus } from '../../libs/common/enums';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
  ) {}

  async createIntent(createPaymentIntentDto: CreatePaymentIntentDto) {
    const payment = this.paymentRepository.create({
      ...createPaymentIntentDto,
      status: PaymentStatus.UNPAID,
    });
    return this.paymentRepository.save(payment);
  }

  findAll() {
    return this.paymentRepository.find();
  }

  async findOne(id: string) {
    const payment = await this.paymentRepository.findOne({ where: { id } });
    if (!payment) {
      throw new NotFoundException(`Payment with ID ${id} not found`);
    }
    return payment;
  }

  async confirm(id: string, confirmPaymentDto: ConfirmPaymentDto) {
    const payment = await this.findOne(id);
    if (payment.status !== PaymentStatus.UNPAID) {
      throw new BadRequestException(
        `Cannot confirm a payment with status ${payment.status}`,
      );
    }
    payment.status = PaymentStatus.PAID;
    payment.transactionId = confirmPaymentDto.transactionId;

    if (confirmPaymentDto.metadata) {
      payment.metadata = { ...payment.metadata, ...confirmPaymentDto.metadata };
    }

    return this.paymentRepository.save(payment);
  }

  async cancel(id: string) {
    const payment = await this.findOne(id);
    if (payment.status === PaymentStatus.PAID) {
      throw new BadRequestException(
        'Cannot cancel an already paid payment. It must be refunded.',
      );
    }
    payment.status = PaymentStatus.CANCELLED;
    return this.paymentRepository.save(payment);
  }
}
