export interface ILocaleService {
  getMessage: (locale: string, key: string, ...args: any[]) => string;
}
