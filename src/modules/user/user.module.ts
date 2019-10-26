import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreateUserCommandHandler } from './commands/create-user.command.handler';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule],
  controllers: [UserController],
  providers: [CreateUserCommandHandler],
})
export class UserModule {}
