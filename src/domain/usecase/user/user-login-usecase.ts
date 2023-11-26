import { Injectable } from '@nestjs/common';
import { Login } from '@/domain/entity/login';
import { User } from '@/domain/entity/user';
import { IUserLoginUseCase } from '@/domain/usecase/interface';

@Injectable()
export class UserLoginUseCase implements IUserLoginUseCase {
  async execute(login: Login): Promise<User> {
    return new User("test", "test", "test");
  }
}
