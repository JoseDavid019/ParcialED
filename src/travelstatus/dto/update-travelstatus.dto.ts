import { PartialType } from '@nestjs/mapped-types';
import { CreateTravelstatusDto } from './create-travelstatus.dto';

export class UpdateTravelstatusDto extends PartialType(CreateTravelstatusDto) {
  Description: string;
}
