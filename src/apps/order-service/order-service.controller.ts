import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderServiceService } from './order-service.service';
import { CreateOrderServiceDto } from './dto/create-order-service.dto';
import { UpdateOrderServiceDto } from './dto/update-order-service.dto';

@Controller('order-service')
export class OrderServiceController {
  constructor(private readonly orderServiceService: OrderServiceService) {}

  @Post()
  create(@Body() createOrderServiceDto: CreateOrderServiceDto) {
    return this.orderServiceService.create(createOrderServiceDto);
  }

  @Get()
  findAll() {
    return this.orderServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderServiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderServiceDto: UpdateOrderServiceDto) {
    return this.orderServiceService.update(+id, updateOrderServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderServiceService.remove(+id);
  }
}
