export type PasswordProps = {
  stringValue: string
}

export class Password {
  private readonly value: string;

  constructor(props: PasswordProps) {
    this.value = props.stringValue;
  }

  public getValue(): string {
    return this.value;
  }
}