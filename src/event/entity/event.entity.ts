// event.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EventEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  month: string;

  @Column()
  date: string;

  @Column()
  time: string;

  @Column()
  year: string;

  @Column()
  image: string;
}
