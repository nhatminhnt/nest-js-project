import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';

import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { Payment } from './entities/payment.entity';

import {
  OrderStatus,
  PaymentStatus,
  PaymentProvider,
} from 'src/libs/common/enums';

const connectionName = 'order';

@Injectable()
export class OrderService {
  constructor(
    @InjectDataSource(connectionName)
    private readonly dataSource: DataSource,

    @InjectRepository(Order, connectionName)
    private readonly orderRepository: Repository<Order>,

    @InjectRepository(OrderItem, connectionName)
    private readonly orderItemRepository: Repository<OrderItem>,

    @InjectRepository(Payment, connectionName)
    private readonly paymentRepository: Repository<Payment>,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    /**
     * Business validation
     */
    if (!createOrderDto.items || createOrderDto.items.length === 0) {
      throw new BadRequestException('Order must contain at least one item');
    }

    const totalAmount = createOrderDto.items.reduce(
      (sum, item) => sum + item.priceSnapshot,
      0,
    );

    /**
     * Transaction
     */
    return this.dataSource.transaction(async (manager) => {
      const orderRepo = manager.getRepository(Order);
      const itemRepo = manager.getRepository(OrderItem);
      const paymentRepo = manager.getRepository(Payment);

      /**
       * Create Order
       */
      const order = orderRepo.create({
        userId: createOrderDto.userId,
        totalAmount,
        paymentMethod: createOrderDto.paymentMethod ?? null,
        status: OrderStatus.PENDING,
        paymentStatus: PaymentStatus.UNPAID,
      });

      const savedOrder = await orderRepo.save(order);

      /**
       * Create Order Items
       */
      const items = createOrderDto.items.map((item) =>
        itemRepo.create({
          order: savedOrder,
          catId: item.catId,
          priceSnapshot: item.priceSnapshot,
        }),
      );

      await itemRepo.save(items);

      /**
       * Create Payment record
       */
      const payment = paymentRepo.create({
        order: savedOrder,
        amount: totalAmount,
        provider: createOrderDto.paymentMethod ?? PaymentProvider.STRIPE,
        status: PaymentStatus.UNPAID,
      });

      await paymentRepo.save(payment);

      /**
       * Return full order
       */
      return orderRepo.findOne({
        where: { id: savedOrder.id },
        relations: ['items', 'payments'],
      });
    });
  }

  findAll() {
    return this.orderRepository.find({
      relations: ['items', 'payments'],
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string) {
    const order = await this.orderRepository.findOne({
      where: { id },
      relations: ['items', 'payments'],
    });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    return order;
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    const order = await this.orderRepository.findOne({
      where: { id },
    });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    if (updateOrderDto.status !== undefined) {
      order.status = updateOrderDto.status;
    }

    if (updateOrderDto.paymentStatus !== undefined) {
      order.paymentStatus = updateOrderDto.paymentStatus;
    }

    if (updateOrderDto.paymentMethod !== undefined) {
      order.paymentMethod = updateOrderDto.paymentMethod;
    }

    await this.orderRepository.save(order);

    return this.findOne(id);
  }

  async remove(id: string) {
    const result = await this.orderRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('Order not found');
    }

    return { id };
  }
}
