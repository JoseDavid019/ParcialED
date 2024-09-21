import { Injectable } from '@nestjs/common';
import { CreateTypetravelDto } from './dto/create-typetravel.dto';
import { UpdateTypetravelDto } from './dto/update-typetravel.dto';

@Injectable()
export class TypetravelService {
  create(createTypetravelDto: CreateTypetravelDto) {
    return 'This action adds a new typetravel';
  }

  findAll() {
    return `This action returns all typetravel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typetravel`;
  }

  update(id: number, updateTypetravelDto: UpdateTypetravelDto) {
    return `This action updates a #${id} typetravel`;
  }

  remove(id: number) {
    return `This action removes a #${id} typetravel`;
  }
}
