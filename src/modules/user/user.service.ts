import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@Inject('MOCK_DATA') private readonly data: any) {}

  findAll() {
    return this.data.users;
  }

  findOneById(id: string) {
    return this.data.users.filter(item => item.id === id)[0];
  }

  getPostsByUser(user: User) {
    return this.data.posts.filter(item => item.userId === user.id);
  }
}
