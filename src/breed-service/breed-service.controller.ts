import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BreedServiceService } from './breed-service.service';
import { CreateBreedServiceDto } from './dto/create-breed-service.dto';
import { UpdateBreedServiceDto } from './dto/update-breed-service.dto';

@Controller('breed-service')
export class BreedServiceController {
  constructor(private readonly breedServiceService: BreedServiceService) {}

  @Post()
  create(@Body() createBreedServiceDto: CreateBreedServiceDto) {
    return this.breedServiceService.create(createBreedServiceDto);
  }

  @Get()
  findAll() {
    return this.breedServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.breedServiceService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBreedServiceDto: UpdateBreedServiceDto,
  ) {
    return this.breedServiceService.update(+id, updateBreedServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.breedServiceService.remove(+id);
  }
}
