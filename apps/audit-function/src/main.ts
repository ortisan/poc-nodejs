// import { NestFactory } from '@nestjs/core';
// import { AuditFunctionModule } from './audit-function.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AuditFunctionModule);
//   await app.listen(3000);
// }
// bootstrap();

import { Handler } from 'aws-lambda';

export const handler: Handler = (event, context) => {
  console.log(event);
  console.log(context);
};