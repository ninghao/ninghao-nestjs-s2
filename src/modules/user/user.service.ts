import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(@Inject('MOCK_DATA') private readonly data: any) {}

  findAll() {
    return this.data.users;
  }

  findOneById(id: string) {
    return this.data.users.filter(item => item.id === id)[0];
  }
}
