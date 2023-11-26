import { Module } from '@nestjs/common';
import { UserSigninUseCase } from './domain/usecase/user/user-signin.usecase';
import { UserLoginUseCase } from './domain/usecase/user/user-login.usecase';
import { UserController } from './adapter/input/user.controller';
import { LoggerModule } from './infrastructure/logger/logger.module';

@Module({
  imports: [LoggerModule],
  controllers: [UserController],
  providers: [UserSigninUseCase, UserLoginUseCase],
})
export class AppModule { }
