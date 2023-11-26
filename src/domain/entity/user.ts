import { Id } from "@/domain/vo/id.vo";
import { Email } from "@/domain/vo/email.vo";
import { Name } from "@/domain/vo/name.vo";
import { Password } from "@/domain/vo/password.vo";
import { type } from "os";

export type BaseUserProps = {
  name: Name,
  email: Email,
  password: Password,
  id?: Id,
  createdAt?: Date,
  updatedAt?: Date
}



export class User {
  public readonly id: Id;
  public readonly name: Name;
  public readonly email: Email;
  public readonly password: Password;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  constructor(name: Name, email: Email, password: Password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}