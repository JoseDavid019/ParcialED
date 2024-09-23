import { PartialType } from '@nestjs/mapped-types';
import { CreatePatientDto } from './create-patient.dto';

export class UpdatePatientDto extends PartialType(CreatePatientDto) {
  FirstName: string;
  LastName: string;
  DoB: Date;
  Identification: string;
  StreetAddress: string;
  Email: string;
  Gender: string;
}
