import { Email } from '@core/domain/vo/email.vo';
import { User } from '@core/domain/entity/user';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { IUserRepository } from '@core/domain/repository/user.repository.contract';
import { Password } from '@core/domain/vo/password.vo';
import { Id } from '@core/domain/vo/id.vo';
import { PrismaUserAssembler } from '../assembler/prisma-user.assembler';

@Injectable()
export class PrismaUserRepository implements IUserRepository {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly prismaUserAssembler: PrismaUserAssembler,
  ) {
    this.prismaService = prismaService;
  }
  async create(user: User): Promise<User> {
    const userModel = this.prismaUserAssembler.toPrismaModel(user);
    await this.prismaService.user.create({ data: userModel });
    return user;
  }

  async findById(id: Id): Promise<User> {
    const userModel = await this.prismaService.user.findUnique({
      where: { id: id.getValue() },
    });
    if (!userModel) {
      return null;
    }
    return this.prismaUserAssembler.toDomain(userModel);
  }

  async findByEmailAndPassword(
    email: Email,
    password: Password,
  ): Promise<User> {
    const userModel = await this.prismaService.user.findUnique({
      where: { email: email.getValue(), password: password.getValue() },
    });
    if (!userModel) {
      return null;
    }
    return this.prismaUserAssembler.toDomain(userModel);
  }
}
