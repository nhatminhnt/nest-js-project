import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';
import { CatImage } from '../cat-image/entities/cat-image.entity';

const connectionName = 'cat';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: connectionName,
      type: 'postgres',
      host: process.env.DB_CAT_HOST ?? process.env.DB_MASTER_HOST,
      port: Number(
        process.env.DB_CAT_PORT ?? process.env.DB_MASTER_PORT ?? 5432,
      ),
      username: process.env.DB_CAT_USERNAME ?? process.env.DB_MASTER_USERNAME,
      password: process.env.DB_CAT_PASSWORD ?? process.env.DB_MASTER_PASSWORD,
      database: process.env.DB_CAT_DATABASE ?? process.env.DB_MASTER_DATABASE,
      entities: [Cat, CatImage],
      autoLoadEntities: false,
      synchronize: process.env.DB_SYNCHRONIZE !== 'false',
      logging: process.env.DB_LOGGING === 'true',
    }),
  ],
})
export class CatDatabaseModule {}
