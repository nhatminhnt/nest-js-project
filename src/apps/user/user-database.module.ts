import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

const connectionName = 'user';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: connectionName,
      type: 'postgres',
      host: process.env.DB_USER_HOST ?? process.env.DB_MASTER_HOST,
      port: Number(
        process.env.DB_USER_PORT ?? process.env.DB_MASTER_PORT ?? 5432,
      ),
      username: process.env.DB_USER_USERNAME ?? process.env.DB_MASTER_USERNAME,
      password: process.env.DB_USER_PASSWORD ?? process.env.DB_MASTER_PASSWORD,
      database: process.env.DB_USER_DATABASE ?? process.env.DB_MASTER_DATABASE,
      entities: [User],
      autoLoadEntities: false,
      synchronize: process.env.DB_SYNCHRONIZE !== 'false',
      logging: process.env.DB_LOGGING === 'true',
    }),
  ],
})
export class UserDatabaseModule {}
