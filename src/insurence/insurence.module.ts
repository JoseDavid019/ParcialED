import { Module } from '@nestjs/common';
import { InsurenceService } from './insurence.service';
import { InsurenceController } from './insurence.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Insurence } from './entities/insurence.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Insurence])],
  controllers: [InsurenceController],
  providers: [InsurenceService],
})
export class InsurenceModule {}
