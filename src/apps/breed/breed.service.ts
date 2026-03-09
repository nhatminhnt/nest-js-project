import { Injectable } from '@nestjs/common';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';

@Injectable()
export class BreedService {
  create(createBreedDto: CreateBreedDto) {
    return 'This action adds a new breedService';
  }

  findAll() {
    return `This action returns all breedService`;
  }

  findOne(id: number) {
    return `This action returns a #${id} breedService`;
  }

  update(id: number, updateBreedServiceDto: UpdateBreedDto) {
    return `This action updates a #${id} breedService`;
  }

  remove(id: number) {
    return `This action removes a #${id} breedService`;
  }
}
