import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('DEMO_FACTORY') demo: string,
  ) {
    console.log(demo);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
