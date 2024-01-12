import type { Completed, Processing } from '../interfaces/status.interface.js';

export type StatusDto = CompletedStatusDto | ProcessingStatusDto;

export class ProcessingStatusDto {
  status: Processing = 'processing';
  constructor() {}
}

export class CompletedStatusDto {
  status: Completed = 'completed';
  constructor(public recognizedText: string) {}
}
