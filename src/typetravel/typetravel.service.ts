import { Injectable } from '@nestjs/common';
import { CreateTypetravelDto } from './dto/create-typetravel.dto';
import { UpdateTypetravelDto } from './dto/update-typetravel.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Typetravel } from './entities/typetravel.entity';

@Injectable()
export class TypetravelService {
  constructor(
    @InjectRepository(Typetravel)
    private typetravelRepository: Repository<Typetravel>
  ){}
  
  findAll() {
    return this.typetravelRepository.find();
  }

  findOne(TypeTravelId: number) {
    return this.typetravelRepository.findOneBy({ TypeTravelId });
  }

  create(createTypetravelDto: CreateTypetravelDto) {
    return this.typetravelRepository.save(createTypetravelDto);
  }

  async put(TypeTravelId: number, updateTypetravelDto: UpdateTypetravelDto){
    const { Description } = updateTypetravelDto;
    if (!Description) {
      return `All fields must be provided for the update: Description.`;
    }
    const Typetravel = await this.typetravelRepository.findOneBy({ TypeTravelId });
    if (Typetravel) {
      await this.typetravelRepository.update(TypeTravelId, updateTypetravelDto);
      return this.typetravelRepository.findOneBy({ TypeTravelId });
    }
    return `Entity with TypeTravelId ${TypeTravelId} not found.`;
  }

  async patch(TypeTravelId: number, updateTypetravelDto: UpdateTypetravelDto) {
    const Typetravel = await this.typetravelRepository.findOneBy({ TypeTravelId });
    if (Typetravel) {
      await this.typetravelRepository.update(TypeTravelId, updateTypetravelDto);
      return this.typetravelRepository.findOneBy({ TypeTravelId });
    }
    return `Entity with TypeTravelId ${TypeTravelId} not found`;
  }

  async remove(TypeTravelId: number) {
    const Typetravel = await this.typetravelRepository.findOneBy({ TypeTravelId });
    if (Typetravel) {
      await this.typetravelRepository.delete(TypeTravelId);
      return `Entity with TypeTravelId ${TypeTravelId} deleted successfully.`;
    }
    return `Entity with TypeTravelId ${TypeTravelId} not found`;
  }
}
