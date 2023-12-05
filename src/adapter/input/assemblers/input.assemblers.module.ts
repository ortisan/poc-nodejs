import { Module } from '@nestjs/common';
import { ApiCreateUserAssembler } from './api-create-user.assembler';

@Module({
  imports: [ApiCreateUserAssembler],
  controllers: [],
  providers: [],
})
export class InputAssemblersModule {}
