import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class AddToCartDto {
  @ApiProperty({ description: 'The ID of the user owning the cart' })
  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({ description: 'The ID of the cat to add to the cart' })
  @IsUUID()
  @IsNotEmpty()
  catId: string;
}
