
import { Email } from "@/domain/vo/email.vo";
import { User } from "@/domain/entity/user";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { IUserRepository } from "@/domain/repository/user.repository";
import { Password } from "@/domain/vo/password.vo";
import { PrismaUserMapper } from "@/infrastructure/database/prisma/mapper/prisma-user.mapper";

@Injectable()
export class PrismaUserRepository implements IUserRepository {
  constructor(private readonly prismaService: PrismaService) {
    this.prismaService = prismaService;
  }
  async create(user: User): Promise<User> {
    const userModel = PrismaUserMapper.toPrismaModel(user);
    await this.prismaService.user.create({ data: userModel });
    return user

  }
  async findByEmailAndPassword(email: Email, password: Password): Promise<User> {
    const userModel = await this.prismaService.user.findUnique({
      where: { email: email.getValue(), password: password.getValue() },
    });
    if (!userModel) {
      return null;
    }
    return PrismaUserMapper.toDomain(userModel);
  }
}