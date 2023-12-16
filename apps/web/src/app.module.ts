import { Module } from '@nestjs/common';
import { UserController } from '@web/adapter/input/controller/user.controller';
import { LoggerModule } from '@core/infrastructure/logger/logger.module';
import { DatabaseModule } from '@core/infrastructure/database/database.module';
import { UseCaseModule } from '@core/domain/usecase/usecase.module';
import { OpenTelemetryConfigModule } from '@core/infrastructure/observability/opentelemetry.module';
import { InputAssemblersModule } from './adapter/input/assemblers/input.assemblers.module';
import { LocaleModule } from '@core/infrastructure/i18n/locale.module';

@Module({
  imports: [
    LoggerModule,
    LocaleModule,
    OpenTelemetryConfigModule,
    InputAssemblersModule,
    DatabaseModule,
    UseCaseModule,
  ],
  controllers: [UserController],
})
export class AppModule {}
