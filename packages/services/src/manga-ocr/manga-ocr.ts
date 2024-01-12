import type { Ocr } from "../ocr.js";
import { spawn, type ChildProcessWithoutNullStreams } from "child_process";

export class MangaOcr implements Ocr {
  private ocr_process: ChildProcessWithoutNullStreams | undefined;

  /**
  * @throws an exception when already started
  */
  start(): void {
    if (this.ocr_process) {
      throw Error('The manga-ocr service has been started.');
    }

    this.ocr_process = spawn(
      'python3',
      ['./manga-ocr.py'],
      { stdio: 'pipe' }
    );
  }

  // TODO: DOS protection
  // @throws an exception if not started
  recognize(image: ArrayBufferLike): Promise<string> {
    if (!this.ocr_process) {
      throw Error('The manga-ocr service has not been started');
    }

    return this.sendImageToPython(image);
  }

  stop(): void {
    this.ocr_process?.disconnect();
    this.ocr_process = undefined;
  }

  private sendImageToPython(image: ArrayBufferLike): Promise<string> {
    const result = new Promise<string>((success, reject) => {
      this.ocr_process?.once('data', (result) => success(result));
    });

    this.ocr_process?.stdin.write(image);
    return result;
  }
}
