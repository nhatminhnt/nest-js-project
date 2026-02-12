import { Test, TestingModule } from '@nestjs/testing';
import { CatServiceController } from './cat-service.controller';
import { CatServiceService } from './cat-service.service';

describe('CatServiceController', () => {
  let controller: CatServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatServiceController],
      providers: [CatServiceService],
    }).compile();

    controller = module.get<CatServiceController>(CatServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
