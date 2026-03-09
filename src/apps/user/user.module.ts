import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserDatabaseModule } from './user-database.module';

const connectionName = 'user';

@Module({
  imports: [
    UserDatabaseModule,
    TypeOrmModule.forFeature([User], connectionName),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
