import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCatImageDto {
  @ApiProperty({
    description: 'The ID of the Cat this image belongs to',
    format: 'uuid',
  })
  @IsUUID()
  @IsNotEmpty()
  catId: string;

  @ApiProperty({ description: 'The URL of the image' })
  @IsString()
  @IsNotEmpty()
  imageUrl: string;

  @ApiPropertyOptional({
    description: 'Whether this image is the thumbnail',
    default: false,
  })
  @IsBoolean()
  @IsOptional()
  isThumbnail?: boolean;
}
