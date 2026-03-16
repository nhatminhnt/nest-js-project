import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';
import { Breed } from '../breed/entities/breed.entity';

@Injectable()
export class CatService {
  constructor(
    @InjectRepository(Cat, 'cat')
    private readonly catRepository: Repository<Cat>,
  ) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const { breedId, ...rest } = createCatDto;
    const cat = this.catRepository.create({
      ...rest,
      breed: { id: breedId } as Breed,
    });
    return await this.catRepository.save(cat);
  }

  async findAll(): Promise<Cat[]> {
    return await this.catRepository.find({
      relations: ['breed', 'images'],
    });
  }

  async findOne(id: string): Promise<Cat> {
    const cat = await this.catRepository.findOne({
      where: { id },
      relations: ['breed', 'images'],
    });
    if (!cat) {
      throw new NotFoundException(`Cat with ID ${id} not found`);
    }
    return cat;
  }

  async update(id: string, updateCatDto: UpdateCatDto): Promise<Cat> {
    const cat = await this.findOne(id);

    const { breedId, ...rest } = updateCatDto;
    if (breedId) {
      cat.breed = { id: breedId } as Breed;
    }

    Object.assign(cat, rest);

    return await this.catRepository.save(cat);
  }

  async remove(id: string): Promise<void> {
    const cat = await this.findOne(id);
    await this.catRepository.softRemove(cat);
  }
}
