import { Module } from '@nestjs/common';
import { BreedServiceService } from './breed-service.service';
import { BreedServiceController } from './breed-service.controller';

@Module({
  controllers: [BreedServiceController],
  providers: [BreedServiceService],
})
export class BreedServiceModule {}
