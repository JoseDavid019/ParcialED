import { Module } from '@nestjs/common';
import { TypeuserService } from './typeuser.service';
import { TypeuserController } from './typeuser.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Typeuser } from './entities/typeuser.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Typeuser])],
  controllers: [TypeuserController],
  providers: [TypeuserService],
})
export class TypeuserModule {}
