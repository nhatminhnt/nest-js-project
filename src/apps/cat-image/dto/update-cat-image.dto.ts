import { PartialType } from '@nestjs/swagger';
import { CreateCatImageDto } from './create-cat-image.dto';

export class UpdateCatImageDto extends PartialType(CreateCatImageDto) {}
