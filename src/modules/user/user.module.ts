import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreateUserCommandHandler } from './commands/create-user.command.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { UserCreatedEventHandler } from './events/user-created.event.handler';
import { UserSage } from './sagas/user.saga';
import { SendWelcomeMessageCommandHandler } from './commands/send-welcome-message.command.handler';
import { GetUsersQueryHandler } from './queries/get-users.query.handler';

@Module({
  imports: [CqrsModule],
  controllers: [UserController],
  providers: [
    CreateUserCommandHandler,
    UserCreatedEventHandler,
    UserSage,
    SendWelcomeMessageCommandHandler,
    GetUsersQueryHandler,
  ],
})
export class UserModule {}
