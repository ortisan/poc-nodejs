import { Module } from '@nestjs/common';
import { UserLoginUseCase } from '@core/domain/usecase/user/user-login.usecase';
import { UserSigninUseCase } from '@core/domain/usecase/user/user-signin.usecase';
import { DatabaseModule } from '@core/infrastructure/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    {
      provide: 'IUserSigninUseCase',
      useClass: UserSigninUseCase,
    },
    {
      provide: 'IUserLoginUseCase',
      useClass: UserLoginUseCase,
    },
  ],
  exports: [
    {
      provide: 'IUserSigninUseCase',
      useClass: UserSigninUseCase,
    },
    {
      provide: 'IUserLoginUseCase',
      useClass: UserLoginUseCase,
    },
  ],
})
export class UseCaseModule {}
