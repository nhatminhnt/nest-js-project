import { PartialType } from '@nestjs/swagger';
import { CreateBreedServiceDto } from './create-breed-service.dto';

export class UpdateBreedServiceDto extends PartialType(CreateBreedServiceDto) {}
