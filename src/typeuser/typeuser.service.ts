import { Injectable } from '@nestjs/common';
import { CreateTypeuserDto } from './dto/create-typeuser.dto';
import { UpdateTypeuserDto } from './dto/update-typeuser.dto';

@Injectable()
export class TypeuserService {
  create(createTypeuserDto: CreateTypeuserDto) {
    return 'This action adds a new typeuser';
  }

  findAll() {
    return `This action returns all typeuser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeuser`;
  }

  update(id: number, updateTypeuserDto: UpdateTypeuserDto) {
    return `This action updates a #${id} typeuser`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeuser`;
  }
}
