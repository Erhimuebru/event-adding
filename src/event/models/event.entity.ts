// import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// @Entity("event_post")
// export class EventEntity {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   title: string;

//   @Column()
//   description: string;

//   @Column()
//   date: string;
// }

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("event_entity")
export class EventEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  date: Date;

  @Column()
  location: string;

  @Column()
  category: string;

  @Column()
  participants: string;

  @Column()
  importance: string;

  @Column()
  source: string;

  @Column()
  status: string;

  @Column()
  relatedEvents: string;

  @Column()
  language: string;

  @Column()
  audience: string;
}
