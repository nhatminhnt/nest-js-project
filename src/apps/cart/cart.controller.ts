import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CartService } from './cart.service';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { RemoveFromCartDto } from './dto/remove-from-cart.dto';

@ApiTags('cart')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get(':userId')
  @ApiOperation({ summary: 'Get user cart' })
  getCart(@Param('userId') userId: string) {
    return this.cartService.getCart(userId);
  }

  @Post('add')
  @ApiOperation({ summary: 'Add cat to cart' })
  addToCart(@Body() addToCartDto: AddToCartDto) {
    return this.cartService.addToCart(addToCartDto);
  }

  @Post('remove/:userId')
  @ApiOperation({ summary: 'Remove item from cart' })
  removeFromCart(
    @Param('userId') userId: string,
    @Body() removeFromCartDto: RemoveFromCartDto,
  ) {
    return this.cartService.removeFromCart(userId, removeFromCartDto);
  }

  @Delete('clear/:userId')
  @ApiOperation({ summary: 'Clear user cart' })
  clearCart(@Param('userId') userId: string) {
    return this.cartService.clearCart(userId);
  }
}
