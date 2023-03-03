import { EventService } from "./event.service";
import { EventDto } from "./event.dto";
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    create(eventDto: EventDto): Promise<EventDto>;
}
