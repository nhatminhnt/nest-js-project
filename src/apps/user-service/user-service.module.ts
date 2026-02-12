import { Module } from '@nestjs/common';
import { UserServiceService } from './user-service.service';
import { UserServiceController } from './user-service.controller';

@Module({
  controllers: [UserServiceController],
  providers: [UserServiceService],
})
export class UserServiceModule {}
