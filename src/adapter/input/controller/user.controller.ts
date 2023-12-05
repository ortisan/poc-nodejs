import {
  Body,
  Controller,
  Param,
  Post,
  Get,
} from '@nestjs/common';
import { ApiCreateUserAssembler } from '@/adapter/input/assemblers/api-create-user.assembler';
import { CreateUserDto } from '@/adapter/dto/create-user.dto';
import { AbstractUserRepository } from '@/domain/repository/user.repository';
import { IUserSigninUseCase } from '@/domain/usecase/user/user.interface';
import { Id } from '@/domain/vo/id.vo';
import { OtelMethodCounter, Span, TraceService } from 'nestjs-otel';

@Controller('api/user')
export class UserController {
  constructor(
    private readonly assembler: ApiCreateUserAssembler,
    private readonly userSigninUseCase: IUserSigninUseCase,
    private readonly userRepository: AbstractUserRepository,
  ) { }

  @Post()
  @Span('CreateUser')
  @OtelMethodCounter()
  async create(@Body() createUserDto: CreateUserDto): Promise<CreateUserDto> {
    const user = this.assembler.toDomain(createUserDto);
    const userCreated = await this.userSigninUseCase.execute(user);
    return this.assembler.toDto(userCreated);
  }

  @Get(':id')
  @Span('GetUserById')
  @OtelMethodCounter()
  async getById(@Param('id') id: string): Promise<CreateUserDto> {
    const user = await this.userRepository.findById(
      new Id({ stringValue: id }),
    );
    return this.assembler.toDto(user);
  }
}
