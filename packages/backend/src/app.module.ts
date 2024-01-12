import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { OcrService } from './ocr/ocr.service.js';
import { OcrController } from './ocr/ocr.controller.js';

@Module({
  imports: [],
  controllers: [AppController, OcrController],
  providers: [AppService, OcrService],
})
export class AppModule {}
