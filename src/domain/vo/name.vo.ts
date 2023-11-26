export type NameProps = {
  stringValue: string
}

export class Name {
  private readonly value: string;

  constructor(props: NameProps) {
    this.value = props.stringValue;
  }

  public getValue(): string {
    return this.value;
  }
}