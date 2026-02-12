import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderServiceDto } from './create-order-service.dto';

export class UpdateOrderServiceDto extends PartialType(CreateOrderServiceDto) {}
