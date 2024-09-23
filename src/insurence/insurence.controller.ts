import { Controller, Get, Post, Put, Body, Patch, Param, Delete } from '@nestjs/common';
import { InsurenceService } from './insurence.service';
import { CreateInsurenceDto } from './dto/create-insurence.dto';
import { UpdateInsurenceDto } from './dto/update-insurence.dto';

@Controller('insurence')
export class InsurenceController {
  constructor(private readonly insurenceService: InsurenceService) {}

  @Post()
  create(@Body() createInsurenceDto: CreateInsurenceDto) {
    return this.insurenceService.create(createInsurenceDto);
  }

  @Get()
  findAll() {
    return this.insurenceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.insurenceService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateInsurenceDto: UpdateInsurenceDto) {
    return this.insurenceService.put(+id, updateInsurenceDto);
  }

  @Patch(':id')
  partialUpdate(@Param('id') id: string, @Body() updateInsurenceDto: UpdateInsurenceDto) {
    return this.insurenceService.patch(+id, updateInsurenceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.insurenceService.remove(+id);
  }
}
