import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import advanced from 'dayjs/plugin/advancedFormat';

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(advanced)


export function now(): Dayjs {
  return dayjs();
}

export function parseDate(dateTime: string): Dayjs {
  return dayjs(dateTime);
}

export function formatDateTime(dateTime: Dayjs, format: string): string {
  return dateTime.format(format);
}

export function formatDateTimeToIsoString(dateTime: Dayjs): string {
  return dateTime.toISOString();
}