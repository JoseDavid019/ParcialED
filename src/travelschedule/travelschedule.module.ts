import { Module } from '@nestjs/common';
import { TravelscheduleService } from './travelschedule.service';
import { TravelscheduleController } from './travelschedule.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Travelschedule } from './entities/travelschedule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Travelschedule])],
  controllers: [TravelscheduleController],
  providers: [TravelscheduleService],
})
export class TravelscheduleModule {}
