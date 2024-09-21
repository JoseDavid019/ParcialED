import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';
    import { Insurence } from 'src/insurence/entities/insurence.entity';

@Entity()
export class Plans {
    @PrimaryGeneratedColumn()
    PlansId: number;

    @Column({length: 250,})
    Description: string;

    @OneToOne(() => Insurence, { nullable: false })
    @JoinColumn({ name: 'InsurentId'})
    InsurentId: Insurence;

    @CreateDateColumn()
    AddedOn: Date;

    @UpdateDateColumn()
    Modified: Date;

    @Column({ default: true })
    Active: boolean;
}
