import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { LoggerService } from './logger.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly logger: LoggerService,
  ) {}

  @Get()
  getHello(): string {
    this.logger.log('AppController: getHello.');
    return this.appService.getHello();
  }
}
