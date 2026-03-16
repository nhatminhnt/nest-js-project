import { Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';
import { CatStatus } from '../../../libs/common/enums';

export class CreateCatDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsUUID()
  @IsNotEmpty()
  breedId: string;

  @IsString()
  @IsNotEmpty()
  gender: string;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  dateOfBirth?: Date;

  @IsNumber()
  @Min(0)
  price: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(CatStatus)
  status?: CatStatus;
}
