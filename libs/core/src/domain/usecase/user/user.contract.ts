import { User } from '@core/domain/entity/user';
import { Login } from '@core/domain/entity/login';

export interface IUserSigninUseCase {
  execute: (user: User) => Promise<User>;
}

export interface IUserLoginUseCase {
  execute: (login: Login) => Promise<User>;
}
