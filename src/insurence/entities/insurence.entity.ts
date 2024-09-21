import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Insurence {
    @PrimaryGeneratedColumn()
    InsurenceId: number;

    @Column({length: 250,})
    Description: string;

    @Column({length: 250,})
    StreetAddress: string;

    @Column({length: 15,})
    PhoneNumber: string;

    @Column({length: 100,})
    ContactName: string;

    @CreateDateColumn()
    AddedOn: Date;

    @UpdateDateColumn()
    Modified: Date;

    @Column({ default: true })
    Active: boolean;
}
