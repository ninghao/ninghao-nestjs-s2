import { ICommandHandler, CommandHandler, EventBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './create-user.command';
import { UserCreatedEvent } from '../events/user-created.event';

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserCommand> {
  constructor(private readonly eventBus: EventBus) {}

  async execute(command: CreateUserCommand) {
    console.log(command);
    this.eventBus.publish(new UserCreatedEvent(command.user));
    return command.user;
  }
}
