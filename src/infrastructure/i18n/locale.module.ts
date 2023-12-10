import { Module } from "@nestjs/common";
import { I18nService } from "./i18n.service";

@Module({
  providers: [
    {
      provide: "ILocaleService",
      useClass: I18nService,
    }
  ], exports: [
    {
      provide: "ILocaleService",
      useClass: I18nService,
    }
  ]
})
export class LocaleModule { }