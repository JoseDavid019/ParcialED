import { Injectable } from '@nestjs/common';
import { CreateInsurenceDto } from './dto/create-insurence.dto';
import { UpdateInsurenceDto } from './dto/update-insurence.dto';

@Injectable()
export class InsurenceService {
  create(createInsurenceDto: CreateInsurenceDto) {
    return 'This action adds a new insurence';
  }

  findAll() {
    return `This action returns all insurence`;
  }

  findOne(id: number) {
    return `This action returns a #${id} insurence`;
  }

  update(id: number, updateInsurenceDto: UpdateInsurenceDto) {
    return `This action updates a #${id} insurence`;
  }

  remove(id: number) {
    return `This action removes a #${id} insurence`;
  }
}
