import { Module } from '@nestjs/common';
import { TravelstatusService } from './travelstatus.service';
import { TravelstatusController } from './travelstatus.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Travelstatus } from './entities/travelstatus.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Travelstatus])],
  controllers: [TravelstatusController],
  providers: [TravelstatusService],
})
export class TravelstatusModule {}
