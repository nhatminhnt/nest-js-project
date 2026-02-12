import { Test, TestingModule } from '@nestjs/testing';
import { OrderServiceService } from './order-service.service';

describe('OrderServiceService', () => {
  let service: OrderServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderServiceService],
    }).compile();

    service = module.get<OrderServiceService>(OrderServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
