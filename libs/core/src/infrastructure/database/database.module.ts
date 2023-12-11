import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaUserRepository } from './prisma/repository/prisma-user.repository';
import { PrismaUserAssembler } from './prisma/assembler/prisma-user.assembler';

@Module({
  providers: [
    PrismaService,
    PrismaUserAssembler,
    {
      provide: 'IUserRepository',
      useClass: PrismaUserRepository,
    },
  ],
  exports: [
    {
      provide: 'IUserRepository',
      useClass: PrismaUserRepository,
    },
  ],
})
export class DatabaseModule {}
