import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  create(createOrderDto: CreateOrderDto) {
    return 'This action adds a new orderService';
  }

  findAll() {
    return `This action returns all orderService`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderService`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} orderService`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderService`;
  }
}
