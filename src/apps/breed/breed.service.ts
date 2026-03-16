import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { Breed } from './entities/breed.entity';

@Injectable()
export class BreedService {
  constructor(
    @InjectRepository(Breed, 'breed')
    private readonly breedRepository: Repository<Breed>,
  ) {}

  async create(createBreedDto: CreateBreedDto): Promise<Breed> {
    const breed = this.breedRepository.create(createBreedDto);
    return await this.breedRepository.save(breed);
  }

  async findAll(): Promise<Breed[]> {
    return await this.breedRepository.find();
  }

  async findOne(id: string): Promise<Breed> {
    const breed = await this.breedRepository.findOne({ where: { id } });
    if (!breed) {
      throw new NotFoundException(`Breed #${id} not found`);
    }
    return breed;
  }

  async update(id: string, updateBreedDto: UpdateBreedDto): Promise<Breed> {
    const breed = await this.breedRepository.preload({
      id,
      ...updateBreedDto,
    });
    if (!breed) {
      throw new NotFoundException(`Breed #${id} not found`);
    }
    return await this.breedRepository.save(breed);
  }

  async remove(id: string): Promise<void> {
    const breed = await this.findOne(id);
    await this.breedRepository.remove(breed);
  }
}
