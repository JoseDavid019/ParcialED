import { Injectable } from '@nestjs/common';
import { CreateTravelstatusDto } from './dto/create-travelstatus.dto';
import { UpdateTravelstatusDto } from './dto/update-travelstatus.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Travelstatus } from './entities/travelstatus.entity';

@Injectable()
export class TravelstatusService {
  constructor(
    @InjectRepository(Travelstatus)
    private travelstatusRepository: Repository<Travelstatus>
  ){}
  
  findAll() {
    return this.travelstatusRepository.find();
  }

  findOne(TravelStatusId: number) {
    return this.travelstatusRepository.findOneBy({ TravelStatusId });
  }

  create(createTravelstatusDto: CreateTravelstatusDto) {
    return this.travelstatusRepository.save(createTravelstatusDto);
  }

  async put(TravelStatusId: number, updateTravelstatusDto: UpdateTravelstatusDto){
    const { Description } = updateTravelstatusDto;
    if (!Description) {
      return `All fields must be provided for the update: Description.`;
    }
    const travelstatus = await this.travelstatusRepository.findOneBy({ TravelStatusId });
    if (travelstatus) {
      await this.travelstatusRepository.update(TravelStatusId, updateTravelstatusDto);
      return this.travelstatusRepository.findOneBy({ TravelStatusId });
    }
    return `Entity with TravelStatusId ${TravelStatusId} not found.`;
  }

  async patch(TravelStatusId: number, updateTravelstatusDto: UpdateTravelstatusDto) {
    const travelstatus = await this.travelstatusRepository.findOneBy({ TravelStatusId });
    if (travelstatus) {
      await this.travelstatusRepository.update(TravelStatusId, updateTravelstatusDto);
      return this.travelstatusRepository.findOneBy({ TravelStatusId });
    }
    return `Entity with TravelStatusId ${TravelStatusId} not found`;
  }

  async remove(TravelStatusId: number) {
    const travelstatus = await this.travelstatusRepository.findOneBy({ TravelStatusId });
    if (travelstatus) {
      await this.travelstatusRepository.delete(TravelStatusId);
      return `Entity with TravelStatusId ${TravelStatusId} deleted successfully.`;
    }
    return `Entity with TravelStatusId ${TravelStatusId} not found`;
  }
}
