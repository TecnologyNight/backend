import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToMany,
    JoinTable,
  } from "typeorm";
// import { Photo } from "./Photo";
import { Services } from './Services';


  @Entity()
  export class Influencer extends BaseEntity {
    @PrimaryGeneratedColumn() //* Id auto incrementable
    id: number;

    @Column()
    nombre: string;

    @Column()
    edad: string;

    @Column(
      {nullable: true,}
    )
    estatura: number;

    @Column()
    precio: number;

    @Column()
    description: string;

    @Column()
    img: string;

    @Column({ default: true }) //* Valor por defecto
    habilitado: boolean;
    
    @ManyToMany(() => Services)
    @JoinTable()
    services: Services[]

    @CreateDateColumn()
    createdAt:Date = new Date();

    @UpdateDateColumn()
    updatedAd:Date = new Date();
  }