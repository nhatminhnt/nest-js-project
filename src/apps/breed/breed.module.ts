import { Module } from '@nestjs/common';
import { BreedService } from './breed.service';
import { BreedController } from './breed.controller';

@Module({
  controllers: [BreedController],
  providers: [BreedService],
})
export class BreedModule {}
