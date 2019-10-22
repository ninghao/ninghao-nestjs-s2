import { Resolver, Query, Args } from '@nestjs/graphql';
import { User } from './user.model';
import { UserService } from './user.service';

@Resolver(User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(returns => [User], { name: 'users' })
  getAllUsers() {
    return this.userService.findAll();
  }

  @Query(returns => User, { name: 'user' })
  getUser(@Args('id') id: string) {
    return this.userService.findOneById(id);
  }
}
