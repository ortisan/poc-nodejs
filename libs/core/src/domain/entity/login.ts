import { Email } from '@core/domain/vo/email.vo';
import { Password } from '@core/domain/vo/password.vo';

export type LoginProps = {
  email: Email;
  password: Password;
};

export class Login {
  public readonly email: Email;
  public readonly password: Password;

  constructor(public readonly props: LoginProps) {
    this.email = props.email;
    this.password = props.password;
  }
}
