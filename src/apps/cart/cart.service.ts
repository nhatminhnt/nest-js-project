import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';
import { CartItem } from './entities/cart-item.entity';
import { Cat } from '../cat/entities/cat.entity';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { RemoveFromCartDto } from './dto/remove-from-cart.dto';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart, 'cart')
    private cartRepository: Repository<Cart>,
    @InjectRepository(CartItem, 'cart')
    private cartItemRepository: Repository<CartItem>,
    @InjectRepository(Cat, 'cart')
    private catRepository: Repository<Cat>,
  ) {}

  async getCart(userId: string): Promise<Cart> {
    let cart = await this.cartRepository.findOne({
      where: { userId },
      relations: ['items', 'items.cat'],
    });

    if (!cart) {
      cart = this.cartRepository.create({ userId });
      await this.cartRepository.save(cart);
      cart.items = [];
    }
    return cart;
  }

  async addToCart(addToCartDto: AddToCartDto): Promise<Cart> {
    const { userId, catId } = addToCartDto;

    const cat = await this.catRepository.findOne({ where: { id: catId } });
    if (!cat) {
      throw new NotFoundException(`Cat with ID ${catId} not found`);
    }

    const cart = await this.getCart(userId);

    const existingItem = cart.items.find((item) => item.cat.id === catId);
    if (existingItem) {
      throw new BadRequestException('Cat is already in the cart');
    }

    const newCartItem = this.cartItemRepository.create({
      cart: { id: cart.id } as Cart,
      cat: { id: catId } as Cat,
      priceSnapshot: cat.price,
    });

    await this.cartItemRepository.save(newCartItem);

    return this.getCart(userId);
  }

  async removeFromCart(
    userId: string,
    removeFromCartDto: RemoveFromCartDto,
  ): Promise<Cart> {
    const cart = await this.getCart(userId);

    const itemIndex = cart.items.findIndex(
      (item) => item.id === removeFromCartDto.cartItemId,
    );

    if (itemIndex === -1) {
      throw new NotFoundException('Cart item not found in your cart');
    }

    await this.cartItemRepository.delete(removeFromCartDto.cartItemId);

    return this.getCart(userId);
  }

  async clearCart(userId: string): Promise<void> {
    const cart = await this.getCart(userId);
    if (cart.items.length > 0) {
      await this.cartItemRepository.delete(cart.items.map((item) => item.id));
    }
  }
}
