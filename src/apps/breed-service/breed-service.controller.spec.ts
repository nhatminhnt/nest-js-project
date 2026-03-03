import { Test, TestingModule } from '@nestjs/testing';
import { BreedServiceController } from './breed-service.controller';
import { BreedServiceService } from './breed-service.service';

describe('BreedServiceController', () => {
  let controller: BreedServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BreedServiceController],
      providers: [BreedServiceService],
    }).compile();

    controller = module.get<BreedServiceController>(BreedServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
