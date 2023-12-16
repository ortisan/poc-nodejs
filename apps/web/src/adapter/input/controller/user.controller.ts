import {
  Body,
  Controller,
  Param,
  Post,
  Get,
  Logger,
  Inject,
} from '@nestjs/common';
import { ApiCreateUserAssembler } from '@web/adapter/input/assemblers/api-create-user.assembler';
import { CreateUserDto } from '@web/adapter/dto/create-user.dto';
import { IUserSigninUseCase } from '@core/domain/usecase/user/user.contract';
import { Id } from '@core/domain/vo/id.vo';
import { OtelMethodCounter, Span, TraceService } from 'nestjs-otel';
import { IUserRepository } from '@core/domain/repository/user.repository.contract';
import { NotFoundError } from '@core/shared/error/errors';
import { CauseDto } from '@core/shared/error/dto/error.dto';

@Controller('api/user')
export class UserController {
  constructor(
    private readonly assembler: ApiCreateUserAssembler,
    @Inject('IUserSigninUseCase')
    private readonly userSigninUseCase: IUserSigninUseCase,
    @Inject('IUserRepository') private readonly userRepository: IUserRepository,
  ) {}

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
    if (!user) {
      throw new NotFoundError('User not found', [
        new CauseDto({
          code: 'user-not-found',
          message: 'User not found',
          arguments: [{ id }],
        }),
      ]);
    }
    return this.assembler.toDto(user);
  }
}
