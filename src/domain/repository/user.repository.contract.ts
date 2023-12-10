import { User } from '../entity/user';
import { Email } from '../vo/email.vo';
import { Id } from '../vo/id.vo';
import { Password } from '../vo/password.vo';

export interface IUserRepository {
  create: (user: User) => Promise<User>;
  findById: (id: Id) => Promise<User>;
  findByEmailAndPassword: (email: Email, password: Password) => Promise<User>;
}
