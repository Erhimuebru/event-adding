import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UsePipes,
  UseInterceptors,
  UploadedFile,
  ValidationPipe,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { EventDto } from "../dto/event.dto";
import { EventService } from "../services/event.service";

@Controller("events")
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  @UsePipes(ValidationPipe)
  @UseInterceptors(FileInterceptor("image"))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() eventDto: EventDto
  ): Promise<EventDto> {
    return this.eventService.create(eventDto);
  }

  // @Post()
  // @UsePipes(ValidationPipe)
  // @UseInterceptors(FileInterceptor("image"))
  // async createEvent(
  //   @UploadedFile() file: Express.Multer.File,
  //   @Body() body: any
  // ) {
  //   const { title, name, time, month, day, year } = body;
  //   const event = await this.eventService.create(EventDto);
  //   return event;
  // }
}
