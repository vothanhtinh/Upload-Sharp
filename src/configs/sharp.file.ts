import { Injectable, PipeTransform } from '@nestjs/common';
import * as path from 'path';
import * as sharp from 'sharp';

@Injectable()
export class SharpPipe
  implements PipeTransform<Express.Multer.File, Promise<string>>
{
  async transform(image: Express.Multer.File): Promise<string> {
    const originalName = path.parse(image.originalname).name;
    const filename = Date.now() + '-' + originalName + '.webp';
    console.log(image);
    await sharp(image.buffer)
      .webp({ quality: 20, effort: 5 })
      .toFile(path.join('uploads', filename));
    return filename;
  }
}
