import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { Cat } from './entities/cat.entity';
import { CatImage } from '../cat-image/entities/cat-image.entity';
import { CatDatabaseModule } from './cat-database.module';

const connectionName = 'cat';

@Module({
  imports: [
    CatDatabaseModule,
    TypeOrmModule.forFeature([Cat, CatImage], connectionName),
  ],
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {}
