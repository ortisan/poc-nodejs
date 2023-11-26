import { User } from "../entity/user";
import { Email } from "../vo/email.vo";
import { Password } from "../vo/password.vo";

export abstract class IUserRepository {
  create: (user: User) => Promise<User>;
  findByEmailAndPassword: (email: Email, password: Password) => Promise<User>;
}