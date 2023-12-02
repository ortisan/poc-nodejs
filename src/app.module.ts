import { Module } from '@nestjs/common';
import { UserController } from '@/adapter/input/controller/user.controller';
import { LoggerModule } from '@/infrastructure/logger/logger.module';
import { DatabaseModule } from '@/infrastructure/database/database.module';
import { UseCaseModule } from '@/domain/usecase/usecase.module';
import { OpenTelemetryConfigModule } from '@/infrastructure/observability/opentelemetry.module';

@Module({
  imports: [LoggerModule, OpenTelemetryConfigModule, DatabaseModule, UseCaseModule, LoggerModule],
  controllers: [UserController],
})
export class AppModule { }
