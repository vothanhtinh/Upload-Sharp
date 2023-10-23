import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UploadService } from './upload.service';

import { FileInterceptor } from '@nestjs/platform-express';
import { SharpPipe } from 'src/configs/sharp.file';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  uploadImage(@UploadedFile(SharpPipe) image: string) {
    return this.uploadService.uploadImage(image);
  }
}
