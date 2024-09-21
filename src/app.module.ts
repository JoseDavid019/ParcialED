import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Travelstatus } from './travelstatus/entities/travelstatus.entity';
import { TravelstatusModule } from './travelstatus/travelstatus.module';
import { TypetravelModule } from './typetravel/typetravel.module';
import { Typetravel } from './typetravel/entities/typetravel.entity';
import { InsurenceModule } from './insurence/insurence.module';
import { Insurence } from './insurence/entities/insurence.entity';
import { PlansModule } from './plans/plans.module';
import { Plans } from './plans/entities/plan.entity';
import { PatientModule } from './patient/patient.module';
import { Patient } from './patient/entities/patient.entity';
import { TypeuserModule } from './typeuser/typeuser.module';
import { Typeuser } from './typeuser/entities/typeuser.entity';
import { UsersModule } from './users/users.module';
import { Users } from './users/entities/user.entity';
import { ProviderModule } from './provider/provider.module';
import { Provider } from './provider/entities/provider.entity';
import { DriverModule } from './driver/driver.module';
import { Driver } from './driver/entities/driver.entity';
import { TravelscheduleModule } from './travelschedule/travelschedule.module';
import { Travelschedule } from './travelschedule/entities/travelschedule.entity';

@Module({
  imports: [
    TravelstatusModule,
    TypetravelModule,
    InsurenceModule,
    PlansModule,
    PatientModule,
    TypeuserModule,
    UsersModule,
    ProviderModule,
    DriverModule,
    TravelscheduleModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '0123456789',
      database: 'projectnestjs',
      entities: [Travelstatus, Typetravel, Insurence, Plans, Patient, Typeuser, Users, Provider, Driver, Travelschedule],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
