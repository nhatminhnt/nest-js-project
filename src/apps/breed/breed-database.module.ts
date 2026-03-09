import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Breed } from './entities/breed.entity';

const connectionName = 'breed';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: connectionName,
      type: 'postgres',
      host: process.env.DB_BREED_HOST ?? process.env.DB_MASTER_HOST,
      port: Number(
        process.env.DB_BREED_PORT ?? process.env.DB_MASTER_PORT ?? 5432,
      ),
      username: process.env.DB_BREED_USERNAME ?? process.env.DB_MASTER_USERNAME,
      password: process.env.DB_BREED_PASSWORD ?? process.env.DB_MASTER_PASSWORD,
      database: process.env.DB_BREED_DATABASE ?? process.env.DB_MASTER_DATABASE,
      entities: [Breed],
      autoLoadEntities: false,
      synchronize: process.env.DB_SYNCHRONIZE !== 'false',
      logging: process.env.DB_LOGGING === 'true',
    }),
  ],
})
export class BreedDatabaseModule {}
