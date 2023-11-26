import { Injectable } from '@nestjs/common';
import { User } from '@/domain/entity/user';
import { IUserSigninUseCase } from '@/domain/usecase/user.interface';
import { IUserRepository } from '@/domain/repository/user.repository';

@Injectable()
export class UserSigninUseCase implements IUserSigninUseCase {

  constructor(public readonly userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async execute(user: User): Promise<User> {
    const userCreated = await this.userRepository.create(user);
    return userCreated;
  }
}
