import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BreedDatabaseModule } from './breed-database.module';
import { BreedService } from './breed.service';
import { BreedController } from './breed.controller';
import { Breed } from './entities/breed.entity';

const connectionName = 'breed';

@Module({
  imports: [
    BreedDatabaseModule,
    TypeOrmModule.forFeature([Breed], connectionName),
  ],
  controllers: [BreedController],
  providers: [BreedService],
})
export class BreedModule {}
