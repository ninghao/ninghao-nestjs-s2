import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreateUserCommandHandler } from './commands/create-user.command.handler';

@Module({
  controllers: [UserController],
  providers: [CreateUserCommandHandler],
})
export class UserModule {}
