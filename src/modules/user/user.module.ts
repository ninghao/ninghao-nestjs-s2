import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreateUserCommandHandler } from './commands/create-user.command.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { UserCreatedEventHandler } from './events/user-created.event.handler';

@Module({
  imports: [CqrsModule],
  controllers: [UserController],
  providers: [CreateUserCommandHandler, UserCreatedEventHandler],
})
export class UserModule {}
