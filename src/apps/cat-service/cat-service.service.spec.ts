import { Test, TestingModule } from '@nestjs/testing';
import { CatServiceService } from './cat-service.service';

describe('CatServiceService', () => {
  let service: CatServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatServiceService],
    }).compile();

    service = module.get<CatServiceService>(CatServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
