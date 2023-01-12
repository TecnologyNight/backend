import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm';

@Entity()
export class Services extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    precio: number

    @CreateDateColumn()
    createdAt:Date = new Date();

    @UpdateDateColumn()
    updatedAd:Date = new Date();

}