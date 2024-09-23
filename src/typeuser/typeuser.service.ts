import { Injectable } from '@nestjs/common';
import { CreateTypeuserDto } from './dto/create-typeuser.dto';
import { UpdateTypeuserDto } from './dto/update-typeuser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Typeuser } from './entities/typeuser.entity';

@Injectable()
export class TypeuserService {
  constructor(
    @InjectRepository(Typeuser)
    private typeuserRepository: Repository<Typeuser>
  ){}
  
  findAll() {
    return this.typeuserRepository.find();
  }

  findOne(TypeUserId: number) {
    return this.typeuserRepository.findOneBy({ TypeUserId });
  }

  create(createTypeuserDto: CreateTypeuserDto) {
    return this.typeuserRepository.save(createTypeuserDto);
  }

  async put(TypeUserId: number, updateTypeuserDto: UpdateTypeuserDto){
    const { Description } = updateTypeuserDto;
    if (!Description) {
      return `All fields must be provided for the update: Description.`;
    }
    const typeuser = await this.typeuserRepository.findOneBy({ TypeUserId });
    if (typeuser) {
      await this.typeuserRepository.update(TypeUserId, updateTypeuserDto);
      return this.typeuserRepository.findOneBy({ TypeUserId });
    }
    return `Entity with TypeUserId ${TypeUserId} not found.`;
  }

  async patch(TypeUserId: number, updateTypeuserDto: UpdateTypeuserDto) {
    const typeuser = await this.typeuserRepository.findOneBy({ TypeUserId });
    if (typeuser) {
      await this.typeuserRepository.update(TypeUserId, updateTypeuserDto);
      return this.typeuserRepository.findOneBy({ TypeUserId });
    }
    return `Entity with TypeUserId ${TypeUserId} not found`;
  }

  async remove(TypeUserId: number) {
    const typeuser = await this.typeuserRepository.findOneBy({ TypeUserId });
    if (typeuser) {
      await this.typeuserRepository.delete(TypeUserId);
      return `Entity with TypeUserId ${TypeUserId} deleted successfully.`;
    }
    return `Entity with TypeUserId ${TypeUserId} not found`;
  }
}
