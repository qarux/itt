import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { OcrService } from './ocr.service.js';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateOcrJobDto } from './dto/create-ocr-job.dto.js';
import { randomUUID } from 'crypto';

@Controller('ocr')
export class OcrController {
  constructor(private ocrService: OcrService) { }

  // TODO: Validation
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async enqueueImage(@UploadedFile() image: Express.Multer.File): Promise<CreateOcrJobDto> {
    console.log(image);
    return new CreateOcrJobDto(randomUUID());
  }
}
