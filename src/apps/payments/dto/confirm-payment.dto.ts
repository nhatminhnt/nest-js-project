import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsObject } from 'class-validator';

export class ConfirmPaymentDto {
  @ApiProperty({ description: 'Transaction ID from the payment provider' })
  @IsString()
  @IsNotEmpty()
  transactionId: string;

  @ApiPropertyOptional({ description: 'Additional metadata from the provider' })
  @IsObject()
  @IsOptional()
  metadata?: Record<string, any>;
}
