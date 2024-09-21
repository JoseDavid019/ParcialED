import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Provider } from 'src/provider/entities/provider.entity';

@Entity()
export class Driver {
    @PrimaryGeneratedColumn()
    DriverId: number;

    @Column({length: 50,})
    DriverLicence: string;

    @Column({ type: 'date' })
    LicenceExpired: Date;

    @ManyToOne(() => Provider, { nullable: false })
    @JoinColumn({ name: 'ProviderId' })
    ProviderId: Provider;

    @CreateDateColumn()
    AddedOn: Date;

    @UpdateDateColumn()
    Modified: Date;

    @Column({ default: true })
    Active: boolean;
}
