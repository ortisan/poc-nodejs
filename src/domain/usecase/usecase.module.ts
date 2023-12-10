import { Module } from '@nestjs/common';
import { UserLoginUseCase } from '@/domain/usecase/user/user-login.usecase';
import { UserSigninUseCase } from '@/domain/usecase/user/user-signin.usecase';
import { DatabaseModule } from '@/infrastructure/database/database.module';
import { IUserLoginUseCase, IUserSigninUseCase } from './user/user.contract';

@Module({
  imports: [DatabaseModule],
  providers: [
    {
      provide: "IUserSigninUseCase",
      useClass: UserSigninUseCase,
    },
    {
      provide: "IUserLoginUseCase",
      useClass: UserLoginUseCase,
    },
  ],
  exports: [
    {
      provide: "IUserSigninUseCase",
      useClass: UserSigninUseCase,
    },
    {
      provide: "IUserLoginUseCase",
      useClass: UserLoginUseCase,
    },
  ],
})
export class UseCaseModule { }
