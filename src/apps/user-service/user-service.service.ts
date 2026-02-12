import { Injectable } from '@nestjs/common';
import { CreateUserServiceDto } from './dto/create-user-service.dto';
import { UpdateUserServiceDto } from './dto/update-user-service.dto';

@Injectable()
export class UserServiceService {
  create(createUserServiceDto: CreateUserServiceDto) {
    return 'This action adds a new userService';
  }

  findAll() {
    return `This action returns all userService`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userService`;
  }

  update(id: number, updateUserServiceDto: UpdateUserServiceDto) {
    return `This action updates a #${id} userService`;
  }

  remove(id: number) {
    return `This action removes a #${id} userService`;
  }
}
