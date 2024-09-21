import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Patient {
    @PrimaryGeneratedColumn()
    PatientId: number;

    @Column({length: 100,})
    FirstName: string;

    @Column({length: 100,})
    LastName: string;

    @Column({ type: 'date' })
    DoB: Date;

    @Column({length: 50,})
    Identification: string;

    @Column({length: 250,})
    StreetAddress: string;

    @Column({length: 250,})
    Email: string;

    @Column({length: 20,})
    Gender: string;

    @CreateDateColumn()
    AddedOn: Date;

    @UpdateDateColumn()
    Modified: Date;

    @Column({ default: true })
    Active: boolean;
}
