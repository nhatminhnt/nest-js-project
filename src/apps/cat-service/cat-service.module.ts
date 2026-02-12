import { Module } from '@nestjs/common';
import { CatServiceService } from './cat-service.service';
import { CatServiceController } from './cat-service.controller';

@Module({
  controllers: [CatServiceController],
  providers: [CatServiceService],
})
export class CatServiceModule {}
