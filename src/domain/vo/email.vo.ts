type EmailProps = {
  stringValue: string;
};

export class Email {
  private readonly value: string;

  constructor(props: EmailProps) {
    this.value = props.stringValue;
  }

  public getValue(): string {
    return this.value;
  }

  public validate(): boolean {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(this.value);
  }
}
