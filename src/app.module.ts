import { Module } from '@nestjs/common';
import { UserController } from '@/adapter/input/controller/user.controller';
import { LoggerModule } from '@/infrastructure/logger/logger.module';
import { DatabaseModule } from '@/infrastructure/database/database.module';
import { UseCaseModule } from '@/domain/usecase/usecase.module';
import { OpenTelemetryConfigModule } from '@/infrastructure/observability/opentelemetry.module';
import { InputAssemblersModule } from './adapter/input/assemblers/input.assemblers.module';
import { LocaleModule } from './infrastructure/i18n/locale.module';

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
export class AppModule { }
