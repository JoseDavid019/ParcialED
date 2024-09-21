import { Injectable } from '@nestjs/common';
import { CreateTravelscheduleDto } from './dto/create-travelschedule.dto';
import { UpdateTravelscheduleDto } from './dto/update-travelschedule.dto';

@Injectable()
export class TravelscheduleService {
  create(createTravelscheduleDto: CreateTravelscheduleDto) {
    return 'This action adds a new travelschedule';
  }

  findAll() {
    return `This action returns all travelschedule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} travelschedule`;
  }

  update(id: number, updateTravelscheduleDto: UpdateTravelscheduleDto) {
    return `This action updates a #${id} travelschedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} travelschedule`;
  }
}
