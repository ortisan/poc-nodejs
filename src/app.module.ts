import { Module } from '@nestjs/common';
import { UserSigninUseCase } from './domain/usecase/user/user-signin-usecase';
import { UserLoginUseCase } from './domain/usecase/user/user-login-usecase';
import { UserController } from './adapter/input/user.controller';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserSigninUseCase, UserLoginUseCase],
})
export class AppModule {}
