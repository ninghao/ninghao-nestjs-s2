import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerService } from './logger.service';

const mockAppService = {
  getHello() {
    return '您好';
  },
};

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: AppService,
      useValue: mockAppService,
    },
    {
      provide: LoggerService,
      useClass: LoggerService,
    },
  ],
})
export class AppModule {}
