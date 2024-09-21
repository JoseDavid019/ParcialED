import { PartialType } from '@nestjs/mapped-types';
import { CreateTravelscheduleDto } from './create-travelschedule.dto';

export class UpdateTravelscheduleDto extends PartialType(CreateTravelscheduleDto) {}
