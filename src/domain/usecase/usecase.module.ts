import { Module } from '@nestjs/common';
import { UserLoginUseCase } from '@/domain/usecase/user/user-login.usecase';
import { AbstractUserLoginUseCase, AbstractUserSigninUseCase } from '@/domain/usecase/user/user.interface';
import { UserSigninUseCase } from '@/domain/usecase/user/user-signin.usecase';
import { DatabaseModule } from '@/infrastructure/database/database.module';


@Module({
  imports: [DatabaseModule],
  providers: [
    {
      provide: AbstractUserSigninUseCase,
      useClass: UserSigninUseCase,
    },
    {
      provide: AbstractUserLoginUseCase,
      useClass: UserLoginUseCase,
    },
  ],
  exports: [
    {
      provide: AbstractUserSigninUseCase,
      useClass: UserSigninUseCase,
    },
    {
      provide: AbstractUserLoginUseCase,
      useClass: UserLoginUseCase,
    },
  ],
})
export class UseCaseModule { }