import { Injectable } from '@nestjs/common';
import { User } from '@/domain/entity/user';
import { IUserSigninUseCase } from '@/domain/usecase/interface';

@Injectable()
export class UserSigninUseCase implements IUserSigninUseCase {
  async execute(user: User): Promise<User> {
    return new User('test', 'test', 'test');
  }
}
