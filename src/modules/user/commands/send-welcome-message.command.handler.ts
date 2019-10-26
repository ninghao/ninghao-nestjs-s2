import { ICommandHandler, EventBus, CommandHandler } from '@nestjs/cqrs';
import { SendWelcomeMessageCommand } from './send-welcome-message.command';

@CommandHandler(SendWelcomeMessageCommand)
export class SendWelcomeMessageCommandHandler
  implements ICommandHandler<SendWelcomeMessageCommand> {
  constructor(private readonly eventBus: EventBus) {}

  async execute(command: SendWelcomeMessageCommand) {
    console.log(`Welcome ${command.user.name}`);
  }
}
