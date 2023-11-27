import { Injectable } from '@nestjs/common';
import { Login } from '@/domain/entity/login';
import { User } from '@/domain/entity/user';
import { AbstractUserLoginUseCase } from '@/domain/usecase/user/user.interface';
import { AbstractUserRepository } from '@/domain/repository/user.repository';
import { NotFoundError } from '@/shared/error/not-found.error';

@Injectable()
export class UserLoginUseCase implements AbstractUserLoginUseCase {

  constructor(public readonly userRepository: AbstractUserRepository) {
    this.userRepository = userRepository;
  }

  async execute(login: Login): Promise<User> {
    const user = await this.userRepository.findByEmailAndPassword(login.email, login.password);
    if (!user) {
      throw new NotFoundError('User not found');
    }
    return user;
  }
}
