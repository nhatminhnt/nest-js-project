import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNumber,
  IsString,
  IsNotEmpty,
  IsEnum,
  IsOptional,
  IsEmail,
  IsUrl,
} from 'class-validator';
import {
  PaymentProvider,
  Currency,
  PaymentMethod,
} from '../../../libs/common/enums';

export class CreatePaymentIntentDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  orderId: string;

  @ApiProperty()
  @IsNumber()
  amount: number;

  @ApiProperty({ enum: PaymentProvider })
  @IsEnum(PaymentProvider)
  provider: PaymentProvider;

  @ApiProperty({ enum: Currency, default: Currency.VND })
  @IsEnum(Currency)
  currency: Currency;

  @ApiProperty({ enum: PaymentMethod, default: PaymentMethod.CREDIT_CARD })
  @IsEnum(PaymentMethod)
  paymentMethod: PaymentMethod;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional()
  @IsUrl()
  @IsOptional()
  returnUrl?: string;

  @ApiPropertyOptional()
  @IsEmail()
  @IsOptional()
  customerEmail?: string;
}
