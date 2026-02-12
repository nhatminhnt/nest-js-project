import { Injectable } from '@nestjs/common';
import { CreateOrderServiceDto } from './dto/create-order-service.dto';
import { UpdateOrderServiceDto } from './dto/update-order-service.dto';

@Injectable()
export class OrderServiceService {
  create(createOrderServiceDto: CreateOrderServiceDto) {
    return 'This action adds a new orderService';
  }

  findAll() {
    return `This action returns all orderService`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderService`;
  }

  update(id: number, updateOrderServiceDto: UpdateOrderServiceDto) {
    return `This action updates a #${id} orderService`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderService`;
  }
}
