import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatService {
  create(createCatDto: CreateCatDto) {
    return 'This action adds a new catService';
  }

  findAll() {
    return `This action returns all catService`;
  }

  findOne(id: number) {
    return `This action returns a #${id} catService`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} catService`;
  }

  remove(id: number) {
    return `This action removes a #${id} catService`;
  }
}
