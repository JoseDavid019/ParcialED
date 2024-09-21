import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Travelstatus } from 'src/travelstatus/entities/travelstatus.entity';
import { Plans } from 'src/plans/entities/plan.entity';
import { Driver } from 'src/driver/entities/driver.entity';
import { Provider } from 'src/provider/entities/provider.entity';
import { Patient } from 'src/patient/entities/patient.entity';
import { Typetravel } from 'src/typetravel/entities/typetravel.entity';
import { Users } from 'src/users/entities/user.entity';

@Entity()
export class Travelschedule {
    @PrimaryGeneratedColumn()
    TravelScheduleId: number;

    @Column({type: 'date'})
    Dateservice: Date;

    @ManyToOne(() => Travelstatus, { nullable: false })
    @JoinColumn({ name: 'TravelStatusId' })
    TravelStatusId: Travelstatus;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    TotalKm: number;

    @ManyToOne(() => Plans, { nullable: false })
    @JoinColumn({ name: 'PlanId' })
    PlanId: Plans;

    @ManyToOne(() => Driver, { nullable: false })
    @JoinColumn({ name: 'DriverId' })
    DriverId: Driver;

    @ManyToOne(() => Provider, { nullable: false })
    @JoinColumn({ name: 'ProviderId' })
    ProviderId: Provider;

    @ManyToOne(() => Patient, { nullable: false })
    @JoinColumn({ name: 'PatientId' })
    PatientId: Patient;

    @ManyToOne(() => Typetravel, { nullable: false })
    @JoinColumn({ name: 'TypeTravelId' })
    TypeTravelId: Typetravel;

    @ManyToOne(() => Users, { nullable: false })
    @JoinColumn({ name: 'UserId' })
    UserId: Users;

    @Column()
    VehicleId: number;

    @Column({length: 250,})
    PUStreetAddress: string;

    @Column({length: 250,})
    ArrivelStreetAddress: string;

    @Column({ type: 'time' })
    ScheduleTime: string;

    @Column({ type: 'time' })
    Appointment: string;

    @Column({ type: 'time' })
    PickupTime: string;

    @Column({ type: 'time' })
    ArrivalTime: string;

    @Column({length: 250,})
    ReasonTransport: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    TotalTravel: number;

    @CreateDateColumn()
    AddedOn: Date;

    @UpdateDateColumn()
    Modified: Date;

    @Column({ default: true })
    Active: boolean;
}
