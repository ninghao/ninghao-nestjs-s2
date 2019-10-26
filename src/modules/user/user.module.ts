import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreateUserCommandHandler } from './commands/create-user.command.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { UserCreatedEventHandler } from './events/user-created.event.handler';
import { UserSage } from './sagas/user.saga';

@Module({
  imports: [CqrsModule],
  controllers: [UserController],
  providers: [CreateUserCommandHandler, UserCreatedEventHandler, UserSage],
})
export class UserModule {}
