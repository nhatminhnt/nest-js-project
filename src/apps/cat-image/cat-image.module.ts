import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatImageService } from './cat-image.service';
import { CatImageController } from './cat-image.controller';
import { CatImage } from './entities/cat-image.entity';
import { CatDatabaseModule } from '../cat/cat-database.module';

@Module({
  imports: [CatDatabaseModule, TypeOrmModule.forFeature([CatImage], 'cat')],
  controllers: [CatImageController],
  providers: [CatImageService],
})
export class CatImageModule {}
