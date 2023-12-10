import { Id } from '@/domain/vo/id.vo';
import { Email } from '@/domain/vo/email.vo';
import { Name } from '@/domain/vo/name.vo';
import { Password } from '@/domain/vo/password.vo';
import { DateTime } from '../vo/datetime.vo';

export type UserProps = {
  name: Name;
  email: Email;
  password: Password;
  id?: Id;
  createdAt?: DateTime;
  updatedAt?: DateTime;
};

export class User {
  public readonly id: Id;
  public readonly name: Name;
  public readonly email: Email;
  public readonly password: Password;
  public readonly createdAt: DateTime;
  public readonly updatedAt: DateTime;

  constructor(props: UserProps) {
    this.id = props.id || Id.newId();
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
    this.createdAt = props.createdAt || DateTime.now();
    this.updatedAt = props.updatedAt || DateTime.now();
  }
}
