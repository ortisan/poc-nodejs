import { User } from '@/domain/entity/user';
import { Login } from '@/domain/entity/login';

export interface IUserSigninUseCase {
  execute: (user: User) => Promise<User>;
}

export interface IUserLoginUseCase {
  execute: (login: Login) => Promise<User>;
}
