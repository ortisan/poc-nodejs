import { Module } from '@nestjs/common';
import { ApiCreateUserAssembler } from './api-create-user.assembler';

@Module({
  providers: [ApiCreateUserAssembler],
  exports: [ApiCreateUserAssembler],
})
export class InputAssemblersModule { }
