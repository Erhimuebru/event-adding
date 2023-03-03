import { EventService } from "../services/event.service";
import { EventDto } from "../dto/event.dto";
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    create(eventDto: EventDto): Promise<EventDto>;
}
