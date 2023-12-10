import { ErrorDto } from "@/shared/error/dto/error.dto";
import { BadRequestError, NotFoundError, GenericError, NotAuthorizedError, UnprocessableEntityError } from "@/shared/error/errors";
import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { FastifyReply } from 'fastify';

@Catch(Error)
export class HttpGenericExceptionFilter implements ExceptionFilter {
  catch(error: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const errorDto = new ErrorDto({ message: error.message ?? 'Internal server error' });
    const response = host.switchToHttp().getResponse<FastifyReply>();
    response.status(500).send(errorDto)
  }
}

@Catch(BadRequestError)
export class HttpBadRequestExceptionFilter implements ExceptionFilter {
  catch(error: BadRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const errorDto = new ErrorDto({ message: error.message ?? 'Bad request error' });
    const response = host.switchToHttp().getResponse<FastifyReply>();
    response.status(400).send(errorDto)
  }
}

@Catch(NotFoundError)
export class HttpNotFoundExceptionFilter implements ExceptionFilter {
  catch(error: NotFoundError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const errorDto = new ErrorDto({ message: error.message ?? 'Not found' });
    const response = host.switchToHttp().getResponse<FastifyReply>();
    response.status(404).send(errorDto)
  }
}

@Catch(NotAuthorizedError)
export class HttpNotAuthorizedExceptionFilter implements ExceptionFilter {
  catch(error: NotAuthorizedError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const errorDto = new ErrorDto({ message: error.message ?? 'Not found' });
    const response = host.switchToHttp().getResponse<FastifyReply>();
    response.status(404).send(errorDto)
  }
}

@Catch(UnprocessableEntityError)
export class HttpUnprocessableEntityExceptionFilter implements ExceptionFilter {
  catch(error: UnprocessableEntityError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const errorDto = new ErrorDto({ message: error.message ?? 'Not found' });
    const response = host.switchToHttp().getResponse<FastifyReply>();
    response.status(422).send(errorDto)
  }
}

export const exceptionFilters = [
  new HttpGenericExceptionFilter(),
  new HttpBadRequestExceptionFilter(),
  new HttpNotFoundExceptionFilter(),
  new HttpNotAuthorizedExceptionFilter(),
  new HttpUnprocessableEntityExceptionFilter(),
];

