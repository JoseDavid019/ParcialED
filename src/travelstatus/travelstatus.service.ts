import { Injectable } from '@nestjs/common';
import { CreateTravelstatusDto } from './dto/create-travelstatus.dto';
import { UpdateTravelstatusDto } from './dto/update-travelstatus.dto';

@Injectable()
export class TravelstatusService {
  create(createTravelstatusDto: CreateTravelstatusDto) {
    return 'This action adds a new travelstatus';
  }

  findAll() {
    return `This action returns all travelstatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} travelstatus`;
  }

  update(id: number, updateTravelstatusDto: UpdateTravelstatusDto) {
    return `This action updates a #${id} travelstatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} travelstatus`;
  }
}
