import { Module } from '@nestjs/common';
import { TypetravelService } from './typetravel.service';
import { TypetravelController } from './typetravel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Typetravel } from './entities/typetravel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Typetravel])],
  controllers: [TypetravelController],
  providers: [TypetravelService],
})
export class TypetravelModule {}
