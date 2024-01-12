export interface Ocr {
  recognize(image: ArrayBufferLike): Promise<string>;
}
