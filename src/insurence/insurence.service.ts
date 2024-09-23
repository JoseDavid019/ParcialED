import { Injectable } from '@nestjs/common';
import { CreateInsurenceDto } from './dto/create-insurence.dto';
import { UpdateInsurenceDto } from './dto/update-insurence.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Insurence } from './entities/insurence.entity';

@Injectable()
export class InsurenceService {
  constructor(
    @InjectRepository(Insurence)
    private insurenceRepository: Repository<Insurence>
  ){}
  
  findAll() {
    return this.insurenceRepository.find();
  }

  findOne(InsurenceId: number) {
    return this.insurenceRepository.findOneBy({ InsurenceId });
  }

  create(createInsurenceDto: CreateInsurenceDto) {
    return this.insurenceRepository.save(createInsurenceDto);
  }

  async put(InsurenceId: number, updateInsurenceDto: UpdateInsurenceDto){
    const { Description, StreetAddress, PhoneNumber, ContactName } = updateInsurenceDto;
    if (!Description || !StreetAddress || !PhoneNumber || !ContactName) {
      return `All fields must be provided for the update: Description, StreetAddress, PhoneNumber and ContactName.`;
    }
    const insurence = await this.insurenceRepository.findOneBy({ InsurenceId });
    if (insurence) {
      await this.insurenceRepository.update(InsurenceId, updateInsurenceDto);
      return this.insurenceRepository.findOneBy({ InsurenceId });
    }
    return `Entity with InsurenceId ${InsurenceId} not found.`;
  }

  async patch(InsurenceId: number, updateInsurenceDto: UpdateInsurenceDto) {
    const insurence = await this.insurenceRepository.findOneBy({ InsurenceId });
    if (insurence) {
      await this.insurenceRepository.update(InsurenceId, updateInsurenceDto);
      return this.insurenceRepository.findOneBy({ InsurenceId });
    }
    return `Entity with InsurenceId ${InsurenceId} not found`;
  }

  async remove(InsurenceId: number) {
    const insurence = await this.insurenceRepository.findOneBy({ InsurenceId });
    if (insurence) {
      await this.insurenceRepository.delete(InsurenceId);
      return `Entity with InsurenceId ${InsurenceId} deleted successfully.`;
    }
    return `Entity with InsurenceId ${InsurenceId} not found`;
  }
}
