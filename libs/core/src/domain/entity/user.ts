import { Id } from '@core/domain/vo/id.vo';
import { Email } from '@core/domain/vo/email.vo';
import { Name } from '@core/domain/vo/name.vo';
import { Password } from '@core/domain/vo/password.vo';
import { DateTime } from '@core/domain/vo/datetime.vo';

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
