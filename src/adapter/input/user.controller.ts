import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserSigninUseCase } from '@/domain/usecase/user/user-signin-usecase';
import { CreateUserDto } from '@/adapter/dto/user.dto';
import { User } from '@/domain/entity/user';
import { v4 as uuidv4 } from 'uuid';

@Controller('api/user')
export class UserController {
  constructor(private readonly userSigninUseCase: UserSigninUseCase) { }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<CreateUserDto> {
    const user = new User(createUserDto.name, createUserDto.email, createUserDto.password);
    // const userCreated = this.userSigninUseCase.execute(user);


    const id = uuidv4();
    createUserDto.id = id
    return createUserDto
  }

}
