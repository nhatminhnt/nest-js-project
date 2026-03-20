import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { PaymentsService } from './payments.service';
import { CreatePaymentIntentDto } from './dto/create-payment-intent.dto';
import { ConfirmPaymentDto } from './dto/confirm-payment.dto';
import { PaymentResponseDto } from './dto/payment-response.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('payments')
@UseGuards(JwtAuthGuard)
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('intent')
  @ApiOperation({ summary: 'Create a new payment intent' })
  async createIntent(@Body() createPaymentIntentDto: CreatePaymentIntentDto) {
    const payment = await this.paymentsService.createIntent(
      createPaymentIntentDto,
    );
    return new PaymentResponseDto(payment);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all payments' })
  async findAll() {
    const payments = await this.paymentsService.findAll();
    return payments.map((p) => new PaymentResponseDto(p));
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a payment by ID' })
  async findOne(@Param('id') id: string) {
    const payment = await this.paymentsService.findOne(id);
    return new PaymentResponseDto(payment);
  }

  @Post(':id/confirm')
  @ApiOperation({ summary: 'Confirm a payment intent' })
  async confirm(
    @Param('id') id: string,
    @Body() confirmPaymentDto: ConfirmPaymentDto,
  ) {
    const payment = await this.paymentsService.confirm(id, confirmPaymentDto);
    return new PaymentResponseDto(payment);
  }

  @Post(':id/cancel')
  @ApiOperation({ summary: 'Cancel a payment intent (Soft Delete)' })
  async cancel(@Param('id') id: string) {
    const payment = await this.paymentsService.cancel(id);
    return new PaymentResponseDto(payment);
  }
}
