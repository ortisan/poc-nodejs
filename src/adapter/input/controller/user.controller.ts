import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreateUserMapper } from '../mapper/api-create-user.mapper';
import { UserSigninUseCase } from '@/domain/usecase/user/user-signin.usecase';
import { CreateUserDto } from '@/adapter/dto/create-user.dto';

@Controller('api/user')
export class UserController {
  constructor(private readonly userSigninUseCase: UserSigninUseCase) { }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<CreateUserDto> {
    const user = ApiCreateUserMapper.toDomain(createUserDto);
    const userCreated = await this.userSigninUseCase.execute(user);
    return ApiCreateUserMapper.toDto(userCreated);
  }

}
