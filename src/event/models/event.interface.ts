// // import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
// import { TypeOrmModule, Prop, Schema, SchemaFactory } from "@nestjs/typeorm";
// import { Document } from "mongodb";

// export type MovieDocument = Event & Document;

// @Schema()
// export class Event {
//   @Prop()
//   title: String;

//   @Prop()
//   image: String;

//   @Prop()
//   id: String;
// }

// export const MovieSchema = SchemaFactory.createForClass(Event);

export interface Event {
  id?: number;
  title?: string;
  description?: string;
  date?: string;
}
