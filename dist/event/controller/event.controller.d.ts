/// <reference types="multer" />
import { EventDto } from "../dto/event.dto";
import { EventService } from "../services/event.service";
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    create(file: Express.Multer.File, eventDto: EventDto): Promise<EventDto>;
}
