import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    clientId: number;

    @Column({length: 50,})
    firstName: string;

    @Column({length: 50,})
    lastName: string;

    @Column({length: 15,})
    phoneNumber: string;

    @Column({length: 255,})
    address: string;

    @Column({length: 150,})
    email: string;

    @Column({ default: true })
    isActive: boolean;
}
