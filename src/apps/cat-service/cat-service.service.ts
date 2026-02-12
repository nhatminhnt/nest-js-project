import { Injectable } from '@nestjs/common';
import { CreateCatServiceDto } from './dto/create-cat-service.dto';
import { UpdateCatServiceDto } from './dto/update-cat-service.dto';

@Injectable()
export class CatServiceService {
  create(createCatServiceDto: CreateCatServiceDto) {
    return 'This action adds a new catService';
  }

  findAll() {
    return `This action returns all catService`;
  }

  findOne(id: number) {
    return `This action returns a #${id} catService`;
  }

  update(id: number, updateCatServiceDto: UpdateCatServiceDto) {
    return `This action updates a #${id} catService`;
  }

  remove(id: number) {
    return `This action removes a #${id} catService`;
  }
}
