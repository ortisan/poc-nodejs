import { Inject, Injectable } from '@nestjs/common';
import { User } from '@/domain/entity/user';
import { IUserSigninUseCase } from '@/domain/usecase/user/user.contract';
import { IUserRepository } from '@/domain/repository/user.repository.contract';

@Injectable()
export class UserSigninUseCase implements IUserSigninUseCase {
  constructor(@Inject("IUserRepository") public readonly userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async execute(user: User): Promise<User> {
    const userCreated = await this.userRepository.create(user);
    return userCreated;
  }
}
