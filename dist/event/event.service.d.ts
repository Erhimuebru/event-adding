import { FindOneOptions, Repository } from "typeorm";
import { EventEntity } from "./event.entity";
import { EventDto } from "./event.dto";
export declare class EventService {
    private readonly eventRepository;
    createEvent(eventDto: EventDto): void;
    constructor(eventRepository: Repository<EventEntity>);
    findAll(): Promise<EventDto[]>;
    toDto(event: EventEntity): any;
    findById(id: FindOneOptions<EventEntity>): Promise<EventDto>;
    create(eventDto: EventDto): Promise<EventEntity>;
}
