import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CatServiceService } from './cat-service.service';
import { CreateCatServiceDto } from './dto/create-cat-service.dto';
import { UpdateCatServiceDto } from './dto/update-cat-service.dto';

@Controller('cat-service')
export class CatServiceController {
  constructor(private readonly catServiceService: CatServiceService) {}

  @Post()
  create(@Body() createCatServiceDto: CreateCatServiceDto) {
    return this.catServiceService.create(createCatServiceDto);
  }

  @Get()
  findAll() {
    return this.catServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catServiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatServiceDto: UpdateCatServiceDto) {
    return this.catServiceService.update(+id, updateCatServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catServiceService.remove(+id);
  }
}
