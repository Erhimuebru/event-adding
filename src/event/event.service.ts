import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindOneOptions, Repository } from "typeorm";
import { EventEntity } from "./event.entity";
import { EventDto } from "./event.dto";
import { plainToClass } from "class-transformer";

@Injectable()
export class EventService {
  createEvent(eventDto: EventDto) {
    throw new Error("Method not implemented.");
  }
  constructor(
    @InjectRepository(EventEntity)
    private readonly eventRepository: Repository<EventEntity>
  ) {}

  async findAll(): Promise<EventDto[]> {
    const events = await this.eventRepository.find();
    return events.map((event) => this.toDto(event));
  }
  toDto(event: EventEntity): any {
    throw new Error("Method not implemented.");
  }

  async findById(id: FindOneOptions<EventEntity>): Promise<EventDto> {
    const event = await this.eventRepository.findOne(id);
    return this.toDto(event);
  }

  async create(eventDto: EventDto): Promise<EventEntity> {
    const event = plainToClass(EventEntity, eventDto);
    return await this.eventRepository.save(event);
  }

  //   async create(eventDto: EventDto): Promise<EventDto> {
  //     const event = this.eventRepository.create(eventDto);
  //     await this.eventRepository.save(event);
  //     return this.toDto(event);
  //   }

  //   async update(id: number, userDto: UserDto): Promise<UserDto> {
  //     await this.userRepository.update(id, userDto);
  //     const updatedUser = await this.userRepository.findOne(id);
  //     return this.toDto(updatedUser);
  //   }

  //   async delete(id: number): Promise<void> {
  //     await this.userRepository.delete(id);
  //   }

  //   private toDto(event: EventEntity): EventDto {
  //     return {
  //       id: user.id,
  //       firstName: user.firstName,
  //       lastName: user.lastName,
  //       email: user.email,
  //     };
  //   }
}
