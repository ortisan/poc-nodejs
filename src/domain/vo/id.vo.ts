import { v4 as uuidv4 } from 'uuid';

type IdProps = {
  stringValue: string;
};

export class Id {
  private readonly value: string;

  constructor(props: IdProps) {
    this.value = props.stringValue;
  }

  public static newId(): Id {
    return new Id({ stringValue: uuidv4() });
  }

  public getValue(): string {
    return this.value;
  }
}
