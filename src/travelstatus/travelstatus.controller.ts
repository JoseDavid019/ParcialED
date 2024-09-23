import { Controller, Get, Post, Put, Body, Patch, Param, Delete } from '@nestjs/common';
import { TravelstatusService } from './travelstatus.service';
import { CreateTravelstatusDto } from './dto/create-travelstatus.dto';
import { UpdateTravelstatusDto } from './dto/update-travelstatus.dto';

@Controller('travelstatus')
export class TravelstatusController {
  constructor(private readonly travelstatusService: TravelstatusService) {}

  @Post()
  create(@Body() createTravelstatusDto: CreateTravelstatusDto) {
    return this.travelstatusService.create(createTravelstatusDto);
  }

  @Get()
  findAll() {
    return this.travelstatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.travelstatusService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTravelstatusDto: UpdateTravelstatusDto) {
    return this.travelstatusService.put(+id, updateTravelstatusDto);
  }

  @Patch(':id')
  partialUpdate(@Param('id') id: string, @Body() updateTravelstatusDto: UpdateTravelstatusDto) {
    return this.travelstatusService.patch(+id, updateTravelstatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.travelstatusService.remove(+id);
  }
}
