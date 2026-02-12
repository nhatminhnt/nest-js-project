import { PartialType } from '@nestjs/mapped-types';
import { CreateCatServiceDto } from './create-cat-service.dto';

export class UpdateCatServiceDto extends PartialType(CreateCatServiceDto) {}
