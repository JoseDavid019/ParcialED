import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private patientRepository: Repository<Patient>
  ){}
  
  findAll() {
    return this.patientRepository.find();
  }

  findOne(PatientId: number) {
    return this.patientRepository.findOneBy({ PatientId });
  }

  create(createPatientDto: CreatePatientDto) {
    return this.patientRepository.save(createPatientDto);
  }

  async put(PatientId: number, updatePatientDto: UpdatePatientDto){
    const { FirstName, LastName, DoB, Identification, StreetAddress, Email, Gender } = updatePatientDto;
    if (!FirstName || !LastName || !DoB || !Identification || !StreetAddress || !Email || !Gender) {
      return `All fields must be provided for the update: FirstName, LastName, DoB, Identification, StreetAddress, Email and Gender.`;
    }
    const patient = await this.patientRepository.findOneBy({ PatientId });
    if (patient) {
      await this.patientRepository.update(PatientId, updatePatientDto);
      return this.patientRepository.findOneBy({ PatientId });
    }
    return `Entity with PatientId ${PatientId} not found.`;
  }

  async patch(PatientId: number, updatePatientDto: UpdatePatientDto) {
    const patient = await this.patientRepository.findOneBy({ PatientId });
    if (patient) {
      await this.patientRepository.update(PatientId, updatePatientDto);
      return this.patientRepository.findOneBy({ PatientId });
    }
    return `Entity with PatientId ${PatientId} not found`;
  }

  async remove(PatientId: number) {
    const patient = await this.patientRepository.findOneBy({ PatientId });
    if (patient) {
      await this.patientRepository.delete(PatientId);
      return `Entity with PatientId ${PatientId} deleted successfully.`;
    }
    return `Entity with PatientId ${PatientId} not found`;
  }
}
