import { Injectable } from '@nestjs/common';
import { MangaOcr, type Ocr } from "services";

export type Id = string;

@Injectable()
export class OcrService {
  private ocr: Ocr = new MangaOcr();
  
  async enqueue(image: ArrayBufferLike): Promise<Id> {

    return "";
  }
}
