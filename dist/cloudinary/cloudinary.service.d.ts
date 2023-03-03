/// <reference types="multer" />
import { ConfigService } from '@nestjs/config';
export declare class CloudinaryService {
    private readonly configService;
    constructor(configService: ConfigService);
    configure(): void;
    uploadImage(file: Express.Multer.File): Promise<any>;
}
