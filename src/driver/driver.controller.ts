import { Controller, Get, Post, Put, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverService } from './driver.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';

@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Get()
  findAll() {
    return this.driverService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driverService.findOne(+id);
  }

  @Post()
  create(@Body() createDriverDto: CreateDriverDto) {
    return this.driverService.create(createDriverDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDriverDto: UpdateDriverDto) {
    return this.driverService.put(+id, updateDriverDto);
  }

  @Patch(':id')
  partialUpdate(@Param('id') id: string, @Body() updateDriverDto: UpdateDriverDto) {
    return this.driverService.patch(+id, updateDriverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driverService.remove(+id);
  }
}
