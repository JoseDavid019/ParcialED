import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Typeuser {
    @PrimaryGeneratedColumn()
    TypeUserId: number;

    @Column({length: 100,})
    Description: string;

    @CreateDateColumn()
    AddedOn: Date;

    @UpdateDateColumn()
    Modified: Date;

    @Column({ default: true })
    Active: boolean;
}
