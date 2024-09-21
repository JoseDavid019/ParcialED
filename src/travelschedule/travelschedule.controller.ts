import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TravelscheduleService } from './travelschedule.service';
import { CreateTravelscheduleDto } from './dto/create-travelschedule.dto';
import { UpdateTravelscheduleDto } from './dto/update-travelschedule.dto';

@Controller('travelschedule')
export class TravelscheduleController {
  constructor(private readonly travelscheduleService: TravelscheduleService) {}

  @Post()
  create(@Body() createTravelscheduleDto: CreateTravelscheduleDto) {
    return this.travelscheduleService.create(createTravelscheduleDto);
  }

  @Get()
  findAll() {
    return this.travelscheduleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.travelscheduleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTravelscheduleDto: UpdateTravelscheduleDto) {
    return this.travelscheduleService.update(+id, updateTravelscheduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.travelscheduleService.remove(+id);
  }
}
