import { Inject, Injectable } from '@nestjs/common';
import { Login } from '@/domain/entity/login';
import { User } from '@/domain/entity/user';
import { IUserLoginUseCase } from '@/domain/usecase/user/user.contract';
import { IUserRepository } from '@/domain/repository/user.repository.contract';
import { NotFoundError } from '@/shared/error/errors';

@Injectable()
export class UserLoginUseCase implements IUserLoginUseCase {
  constructor(@Inject("IUserRepository") public readonly userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async execute(login: Login): Promise<User> {
    const user = await this.userRepository.findByEmailAndPassword(
      login.email,
      login.password,
    );
    if (!user) {
      throw new NotFoundError('User not found');
    }
    return user;
  }
}
