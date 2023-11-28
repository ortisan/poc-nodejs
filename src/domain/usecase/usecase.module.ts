import { Module } from '@nestjs/common';
import { UserLoginUseCase } from '@/domain/usecase/user/user-login.usecase';
import { IUserLoginUseCase, IUserSigninUseCase } from '@/domain/usecase/user/user.interface';
import { UserSigninUseCase } from '@/domain/usecase/user/user-signin.usecase';
import { DatabaseModule } from '@/infrastructure/database/database.module';


@Module({
  imports: [DatabaseModule],
  providers: [
    {
      provide: IUserSigninUseCase,
      useClass: UserSigninUseCase,
    },
    {
      provide: IUserLoginUseCase,
      useClass: UserLoginUseCase,
    },
  ],
  exports: [
    {
      provide: IUserSigninUseCase,
      useClass: UserSigninUseCase,
    },
    {
      provide: IUserLoginUseCase,
      useClass: UserLoginUseCase,
    },
  ],
})
export class UseCaseModule { }