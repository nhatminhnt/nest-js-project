import { Test, TestingModule } from '@nestjs/testing';
import { OrderServiceController } from './order-service.controller';
import { OrderServiceService } from './order-service.service';

describe('OrderServiceController', () => {
  let controller: OrderServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderServiceController],
      providers: [OrderServiceService],
    }).compile();

    controller = module.get<OrderServiceController>(OrderServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
