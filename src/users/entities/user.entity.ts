import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column({length: 50,})
    username: string;

    @Column({length: 255,})
    password: string;

    @Column({length: 150,})
    email: string;

    @Column({ default: true })
    isActive: boolean;
}
