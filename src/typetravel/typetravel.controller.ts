import { Controller, Get, Post, Put, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypetravelService } from './typetravel.service';
import { CreateTypetravelDto } from './dto/create-typetravel.dto';
import { UpdateTypetravelDto } from './dto/update-typetravel.dto';

@Controller('typetravel')
export class TypetravelController {
  constructor(private readonly typetravelService: TypetravelService) {}

  @Post()
  create(@Body() createTypetravelDto: CreateTypetravelDto) {
    return this.typetravelService.create(createTypetravelDto);
  }

  @Get()
  findAll() {
    return this.typetravelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typetravelService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTypetravelDto: UpdateTypetravelDto) {
    return this.typetravelService.put(+id, updateTypetravelDto);
  }

  @Patch(':id')
  partialUpdate(@Param('id') id: string, @Body() updateTypetravelDto: UpdateTypetravelDto) {
    return this.typetravelService.patch(+id, updateTypetravelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typetravelService.remove(+id);
  }
}
