import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerService } from './logger.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: LoggerService,
      useClass: LoggerService,
    },
  ],
})
export class AppModule {}
