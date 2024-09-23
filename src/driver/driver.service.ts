import { Injectable } from '@nestjs/common';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Driver } from './entities/driver.entity';

@Injectable()
export class DriverService {
  constructor(
    @InjectRepository(Driver)
    private driverRepository: Repository<Driver>
  ){}
  
  findAll() {
    return this.driverRepository.find();
  }

  findOne(DriverId: number) {
    return this.driverRepository.findOneBy({ DriverId });
  }

  create(createDriverDto: CreateDriverDto) {
    return this.driverRepository.save(createDriverDto);
  }

  async put(DriverId: number, updateDriverDto: UpdateDriverDto){
    const { DriverLicence, LicenceExpired, ProviderId } = updateDriverDto;
    if (!DriverLicence || !LicenceExpired || !ProviderId) {
      return `All fields must be provided for the update: DriverLicence, LicenceExpired and ProviderId.`;
    }
    const driver = await this.driverRepository.findOneBy({ DriverId });
    if (driver) {
      await this.driverRepository.update(DriverId, {...updateDriverDto, ProviderId: ProviderId,});
      return this.driverRepository.findOneBy({ DriverId });
    }
    return `Entity with DriverId ${DriverId} not found.`;
  }

  async patch(DriverId: number, updateDriverDto: UpdateDriverDto) {
    const driver = await this.driverRepository.findOneBy({ DriverId });
    if (driver) {
      await this.driverRepository.update(DriverId, {...updateDriverDto, ProviderId: updateDriverDto.ProviderId,});
      return this.driverRepository.findOneBy({ DriverId });
    }
    return `Entity with DriverId ${DriverId} not found`;
  }

  async remove(DriverId: number) {
    const driver = await this.driverRepository.findOneBy({ DriverId });
    if (driver) {
      await this.driverRepository.delete(DriverId);
      return `Entity with DriverId ${DriverId} deleted successfully.`;
    }
    return `Entity with DriverId ${DriverId} not found`;
  }
}
