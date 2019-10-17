import { Module, DynamicModule } from '@nestjs/common';
import { LoggerService } from './logger.service';

@Module({})
export class LoggerModule {
  static regisiter(): DynamicModule {
    return {
      module: LoggerModule,
      providers: [LoggerService],
      exports: [LoggerService],
    };
  }
}
