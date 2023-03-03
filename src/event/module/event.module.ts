import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EventController } from "../controller/event.controller";
import { EventService } from "../services/event.service";
import { EventEntity } from "../entity/event.entity";

@Module({
  imports: [TypeOrmModule.forFeature([EventEntity])],
  controllers: [EventController],
  providers: [EventService],
})
export class EventsModule {}
