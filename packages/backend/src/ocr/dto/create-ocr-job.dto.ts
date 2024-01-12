import { type UUID } from 'crypto';

export class CreateOcrJobDto {
  constructor(public id: UUID) {}
}
