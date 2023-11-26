import { RequireOnlyOne } from "@/infrastructure/typescript/type";
import { newDayJs, now, parseDate } from "@/infrastructure/utils/dayjs";
import { Dayjs } from "dayjs";

type BaseDateTimeProps = {
  dayJsValue?: Dayjs,
  dateValue?: Date,
  stringValue?: string
}

export type DateTimeProps = RequireOnlyOne<BaseDateTimeProps, 'dayJsValue' | 'dateValue' | 'stringValue'>

export class DateTime {
  private readonly value: Dayjs;

  constructor(public readonly props: DateTimeProps) {
    if (props.dayJsValue) {
      this.value = props.dayJsValue
    } else if (props.dateValue) {
      this.value = newDayJs(props.dateValue);
    } else if (props.stringValue) {
      this.value = parseDate(props.stringValue);
    }
  }

  public static now(): DateTime {
    return new DateTime({ dayJsValue: now() });
  }

  public getValue(): Dayjs {
    return this.value;
  }

  public getValueAsDate(): Date {
    return this.value.toDate();
  }

}