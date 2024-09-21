import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeuserService } from './typeuser.service';
import { CreateTypeuserDto } from './dto/create-typeuser.dto';
import { UpdateTypeuserDto } from './dto/update-typeuser.dto';

@Controller('typeuser')
export class TypeuserController {
  constructor(private readonly typeuserService: TypeuserService) {}

  @Post()
  create(@Body() createTypeuserDto: CreateTypeuserDto) {
    return this.typeuserService.create(createTypeuserDto);
  }

  @Get()
  findAll() {
    return this.typeuserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeuserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeuserDto: UpdateTypeuserDto) {
    return this.typeuserService.update(+id, updateTypeuserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeuserService.remove(+id);
  }
}
