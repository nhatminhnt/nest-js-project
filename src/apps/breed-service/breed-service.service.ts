import { Injectable } from '@nestjs/common';
import { CreateBreedServiceDto } from './dto/create-breed-service.dto';
import { UpdateBreedServiceDto } from './dto/update-breed-service.dto';

@Injectable()
export class BreedServiceService {
  create(createBreedServiceDto: CreateBreedServiceDto) {
    return 'This action adds a new breedService';
  }

  findAll() {
    return `This action returns all breedService`;
  }

  findOne(id: number) {
    return `This action returns a #${id} breedService`;
  }

  update(id: number, updateBreedServiceDto: UpdateBreedServiceDto) {
    return `This action updates a #${id} breedService`;
  }

  remove(id: number) {
    return `This action removes a #${id} breedService`;
  }
}
