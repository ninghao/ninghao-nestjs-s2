import { Module } from '@nestjs/common';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [LoggerModule.regisiter('🌿')],
  exports: [LoggerModule],
})
export class CommonModule {}
