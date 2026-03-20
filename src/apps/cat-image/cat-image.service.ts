import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { CreateCatImageDto } from './dto/create-cat-image.dto';
import { UpdateCatImageDto } from './dto/update-cat-image.dto';
import { CatImage } from './entities/cat-image.entity';

@Injectable()
export class CatImageService {
  constructor(
    @InjectRepository(CatImage, 'cat')
    private readonly catImageRepository: Repository<CatImage>,
  ) {}

  async create(createCatImageDto: CreateCatImageDto) {
    const { catId, ...rest } = createCatImageDto;
    const newImage = this.catImageRepository.create({
      ...rest,
      cat: { id: catId },
    });
    return this.catImageRepository.save(newImage);
  }

  findAll() {
    return this.catImageRepository.find({ relations: ['cat'] });
  }

  async findOne(id: string) {
    const image = await this.catImageRepository.findOne({
      where: { id },
      relations: ['cat'],
    });

    if (!image) {
      throw new NotFoundException(`CatImage with ID ${id} not found`);
    }
    return image;
  }

  async update(id: string, updateCatImageDto: UpdateCatImageDto) {
    const image = await this.findOne(id);
    const { catId, ...rest } = updateCatImageDto;

    const updateData: DeepPartial<CatImage> = { ...rest };
    if (catId) {
      updateData.cat = { id: catId };
    }

    Object.assign(image, updateData);
    return this.catImageRepository.save(image);
  }

  async remove(id: string) {
    const image = await this.findOne(id);
    return this.catImageRepository.remove(image);
  }
}
