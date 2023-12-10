import { ILocaleService } from '@/shared/i18n/locale.service.contract';
import { I18n } from 'i18n';
import path from 'node:path';

export class I18nService implements ILocaleService {

  private i18n: I18n;

  constructor() {
    this.i18n = new I18n({
      locales: ['en', 'pt-br'],
      defaultLocale: 'pt-br',
      directory: path.join('./', 'locales'),
      header: 'accept-language',
    });
  }

  getMessage(locale: string, key: string, ...args: string[]) {
    return this.i18n.__({ locale, phrase: key }, ...args);
  }
}