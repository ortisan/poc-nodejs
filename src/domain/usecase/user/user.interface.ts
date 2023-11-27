import { User } from "@/domain/entity/user";
import { Login } from "@/domain/entity/login";

export abstract class AbstractUserSigninUseCase {
  execute: (user: User) => Promise<User>;
}

export abstract class AbstractUserLoginUseCase {
  execute: (login: Login) => Promise<User>;
}