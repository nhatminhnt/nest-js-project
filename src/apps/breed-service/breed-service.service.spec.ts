import { Test, TestingModule } from '@nestjs/testing';
import { BreedServiceService } from './breed-service.service';

describe('BreedServiceService', () => {
  let service: BreedServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BreedServiceService],
    }).compile();

    service = module.get<BreedServiceService>(BreedServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
