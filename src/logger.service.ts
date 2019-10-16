import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
  constructor() {
    console.log('LoggerService: initialized');
  }

  log(message: string) {
    console.log(message);
  }
}
