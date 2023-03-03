"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const event_entity_1 = require("./event.entity");
const class_transformer_1 = require("class-transformer");
let EventService = class EventService {
    createEvent(eventDto) {
        throw new Error("Method not implemented.");
    }
    constructor(eventRepository) {
        this.eventRepository = eventRepository;
    }
    async findAll() {
        const events = await this.eventRepository.find();
        return events.map((event) => this.toDto(event));
    }
    toDto(event) {
        throw new Error("Method not implemented.");
    }
    async findById(id) {
        const event = await this.eventRepository.findOne(id);
        return this.toDto(event);
    }
    async create(eventDto) {
        const event = (0, class_transformer_1.plainToClass)(event_entity_1.EventEntity, eventDto);
        return await this.eventRepository.save(event);
    }
};
EventService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(event_entity_1.EventEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EventService);
exports.EventService = EventService;
//# sourceMappingURL=event.service.js.map