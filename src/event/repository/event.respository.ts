import { EntityRepository, Repository } from "typeorm";
import { EventEntity } from "../entity/event.entity";

@EntityRepository(EventEntity)
export class EventRepository extends Repository<EventEntity> {}
