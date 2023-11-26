import { RequireOnlyOne } from "@/infrastructure/typescript/type";
import { now, parseDate } from "@/infrastructure/utils/dayjs";
import { Dayjs } from "dayjs";

type BaseDateTimeProps = {
  dateValue?: Dayjs,
  stringValue?: string
}

export type DateTimeProps = RequireOnlyOne<BaseDateTimeProps, 'dateValue' | 'stringValue'>

export class DateTime {
  private readonly value: Dayjs;

  constructor(public readonly props: DateTimeProps) {
    if (props.dateValue) {
      this.value = props.dateValue;
    } else if (props.stringValue) {
      this.value = parseDate(props.stringValue);
    }
  }

  public static NewDateTime(): DateTime {
    return new DateTime({ dateValue: now() });
  }

  public getValue(): Dayjs {
    return this.value;
  }

}