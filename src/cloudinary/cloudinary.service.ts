import { Injectable } from '@nestjs/common';
import { v2 } from 'cloudinary';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CloudinaryService {
  constructor(private readonly configService: ConfigService) {}

  configure() {
    v2.config({
      cloud_name: this.configService.get('dmfb370xe'),
      api_key: this.configService.get('888667277488398'),
      api_secret: this.configService.get('REdduP6AM1bighYEmRDlj6kFk1w'),
    });
  }

  async uploadImage(file: Express.Multer.File) {
    const result = await v2.uploader.upload(file.path);

    return result.sec;
  }
}
