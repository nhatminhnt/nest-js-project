import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class RemoveFromCartDto {
  @ApiProperty({ description: 'The ID of the cart item to remove' })
  @IsUUID()
  @IsNotEmpty()
  cartItemId: string;
}
