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

    @Column()
    ProviderId: number;

    @ManyToOne(() => Provider, { nullable: false })
    @JoinColumn({ name: 'ProviderId' })
    Provider: Provider;

    @CreateDateColumn()
    AddedOn: Date;

    @UpdateDateColumn()
    Modified: Date;

    @Column({ default: true })
    Active: boolean;
}
