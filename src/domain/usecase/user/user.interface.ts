import { User } from '@/domain/entity/user';
import { Login } from '@/domain/entity/login';

export abstract class IUserSigninUseCase {
  execute: (user: User) => Promise<User>;
}

export abstract class IUserLoginUseCase {
  execute: (login: Login) => Promise<User>;
}
