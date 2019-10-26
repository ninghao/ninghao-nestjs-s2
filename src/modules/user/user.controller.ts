import { Controller, Post, Body, Get } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './commands/create-user.command';
import { GetUsersQuery } from './queries/get-users.query';

@Controller('users')
export class UserController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  createUser(@Body() user: any) {
    return this.commandBus.execute(new CreateUserCommand(user));
  }

  @Get()
  getUsers() {
    return this.queryBus.execute(new GetUsersQuery());
  }
}
