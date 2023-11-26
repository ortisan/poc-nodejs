import { Module } from '@nestjs/common';

import { PrismaService } from './prisma/prisma.service';
import { IUserRepository } from "@/domain/repository/user.repository";
import { PrismaUserRepository } from './prisma/repository/prisma-user.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: IUserRepository,
      useClass: PrismaUserRepository,
    },
  ],
  exports: [
    {
      provide: IUserRepository,
      useClass: PrismaUserRepository,
    },
  ],
})
export class DatabaseModule { }