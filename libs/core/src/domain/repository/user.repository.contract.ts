import { User } from '@core/domain/entity/user';
import { Email } from '@core/domain/vo/email.vo';
import { Id } from '@core/domain/vo/id.vo';
import { Password } from '@core/domain/vo/password.vo';

export interface IUserRepository {
  create: (user: User) => Promise<User>;
  findById: (id: Id) => Promise<User>;
  findByEmailAndPassword: (email: Email, password: Password) => Promise<User>;
}
