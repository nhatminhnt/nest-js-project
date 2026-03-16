import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBreedDto {
  @ApiProperty({ example: 'Persian' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: false, example: 'Iran' })
  @IsString()
  @IsOptional()
  originCountry?: string;

  @ApiProperty({ required: false, example: 'Quiet, Sweet, Peaceful' })
  @IsString()
  @IsOptional()
  temperament?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  description?: string;
}
