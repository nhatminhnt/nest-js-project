import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_MASTER_HOST,
      port: Number(process.env.DB_MASTER_PORT ?? 5432),
      username: process.env.DB_MASTER_USERNAME,
      password: process.env.DB_MASTER_PASSWORD,
      database: process.env.DB_MASTER_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      logging: process.env.DB_LOGGING === 'true',
    }),
  ],
})
export class DatabaseModule {}
