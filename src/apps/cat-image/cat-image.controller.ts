import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CatImageService } from './cat-image.service';
import { CreateCatImageDto } from './dto/create-cat-image.dto';
import { UpdateCatImageDto } from './dto/update-cat-image.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '../../libs/common/enums';

@ApiTags('cat-image')
@Controller('cat-image')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(UserRole.ADMIN)
export class CatImageController {
  constructor(private readonly catImageService: CatImageService) {}

  @Post()
  create(@Body() createCatImageDto: CreateCatImageDto) {
    return this.catImageService.create(createCatImageDto);
  }

  @Get()
  findAll() {
    return this.catImageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.catImageService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCatImageDto: UpdateCatImageDto,
  ) {
    return this.catImageService.update(id, updateCatImageDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.catImageService.remove(id);
  }
}
