import { ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from './create-user.command';

export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserCommand> {
  async execute(command: CreateUserCommand) {
    console.log(command);
    return command.user;
  }
}
