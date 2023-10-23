import { Injectable } from '@nestjs/common';
// import { CreateUploadDto } from './dto/create-upload.dto';

@Injectable()
export class UploadService {
  create() {
    return 'This action adds a new upload';
  }
  async uploadImage(file: any): Promise<any> {
    try {
      const serverAddress = 'http://localhost:3001'; // Change this to your actual server address
      const imagePath = `/uploads/${file}`;
      const imageLink = `${serverAddress}${imagePath}`;
      return { image: imageLink };
    } catch (error) {
      return error;
    }
  }
}
