import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { EventService } from "./event.service";
import { EventDto } from "./event.dto";

@Controller("events")
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() eventDto: EventDto): Promise<EventDto> {
    return this.eventService.create(eventDto);
  }
}
