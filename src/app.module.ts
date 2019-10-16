import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerService } from './logger.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: AppService,
      useClass: AppService,
    },
    {
      provide: 'LOGGER',
      useClass: LoggerService,
    },
    {
      provide: 'DEMO_FACTORY',
      useFactory: logger => {
        logger.log('This message came from a provider factory.');
        return 'Demo factory.';
      },
      inject: ['LOGGER'],
    },
  ],
})
export class AppModule {}
