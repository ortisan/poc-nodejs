import { Module } from '@nestjs/common';

import { PrismaService } from './prisma/prisma.service';
import { AbstractUserRepository } from '@/domain/repository/user.repository';
import { PrismaUserRepository } from './prisma/repository/prisma-user.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: AbstractUserRepository,
      useClass: PrismaUserRepository,
    },
  ],
  exports: [
    {
      provide: AbstractUserRepository,
      useClass: PrismaUserRepository,
    },
  ],
})
export class DatabaseModule {}
