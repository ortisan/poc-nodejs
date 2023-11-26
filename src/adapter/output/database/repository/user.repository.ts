import { User } from "@/domain/entity/user";
import { Email } from "@/domain/vo/email.vo";

export interface IUserRepository {
  createUser(user: User): Promise<void>;
  findUserByEmail(email: Email): Promise<User | null>;
}