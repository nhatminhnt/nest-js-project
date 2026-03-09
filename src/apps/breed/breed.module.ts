import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BreedService } from './breed.service';
import { BreedController } from './breed.controller';
import { Breed } from './entities/breed.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Breed])],
  controllers: [BreedController],
  providers: [BreedService],
})
export class BreedModule {}
