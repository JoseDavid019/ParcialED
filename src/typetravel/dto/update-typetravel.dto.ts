import { PartialType } from '@nestjs/mapped-types';
import { CreateTypetravelDto } from './create-typetravel.dto';

export class UpdateTypetravelDto extends PartialType(CreateTypetravelDto) {}
