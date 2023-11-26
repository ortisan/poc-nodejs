import { Injectable } from '@nestjs/common';
import { Login } from '@/domain/entity/login';
import { User } from '@/domain/entity/user';
import { IUserLoginUseCase } from '@/domain/usecase/user.interface';
import { IUserRepository } from '@/domain/repository/user.repository';
import { NotFoundError } from '@/shared/error/not-found.error';

@Injectable()
export class UserLoginUseCase implements IUserLoginUseCase {

  constructor(public readonly userRepository: IUserRepository) {
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