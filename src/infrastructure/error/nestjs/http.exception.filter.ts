import { CauseDto, ErrorDto } from "@/shared/error/dto/error.dto";
import { BadRequestError, NotFoundError, GenericError, NotAuthorizedError, UnprocessableEntityError } from "@/shared/error/errors";
import { ILocaleService } from "@/shared/i18n/locale.service.contract";
import { ArgumentsHost, Catch, ExceptionFilter, Inject } from "@nestjs/common";
import { FastifyReply } from 'fastify';

const acceptLanguageHeader = 'accept-language';

abstract class AbstractBaseExceptionFilter implements ExceptionFilter {
  constructor(@Inject("ILocaleService") private readonly localeService: ILocaleService) {
  }

  catch(exception: any, host: ArgumentsHost) {
    throw new Error("Method not implemented.");
  }

  catchError(error: GenericError, host: ArgumentsHost, statusCode: number) {
    const language = this.getAcceptLanguageHeader(host);
    const errorDto = this.translateError(GenericError.fromError(error), language);
    const response = host.switchToHttp().getResponse<FastifyReply>();
    response.status(statusCode).send(errorDto)
  }

  translateError(exception: GenericError, language: string): ErrorDto {
    const causes = exception.causes?.map(cause => {
      return new CauseDto({ code: cause.code, message: this.localeService.getMessage(language, cause.code, cause.arguments), arguments: cause.arguments });
    });
    return new ErrorDto({ message: exception.message, causes });
  }

  getAcceptLanguageHeader(host: ArgumentsHost): string {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    return request.headers[acceptLanguageHeader] as string;
  }
}


@Catch(Error, GenericError)
export class HttpGenericExceptionFilter extends AbstractBaseExceptionFilter {
  catch(error: Error | GenericError, host: ArgumentsHost) {
    super.catchError(GenericError.fromError(error), host, 500);
  }
}

@Catch(BadRequestError)
export class HttpBadRequestExceptionFilter extends HttpGenericExceptionFilter {
  catch(error: BadRequestError, host: ArgumentsHost) {
    super.catchError(error, host, 400);
  }
}

@Catch(NotFoundError)
export class HttpNotFoundExceptionFilter extends HttpGenericExceptionFilter {
  catch(error: NotFoundError, host: ArgumentsHost) {
    super.catchError(error, host, 404);
  }
}

@Catch(NotAuthorizedError)
export class HttpNotAuthorizedExceptionFilter extends HttpGenericExceptionFilter {
  catch(error: NotAuthorizedError, host: ArgumentsHost) {
    super.catchError(error, host, 401);
  }
}

@Catch(UnprocessableEntityError)
export class HttpUnprocessableEntityExceptionFilter extends HttpGenericExceptionFilter {
  catch(error: UnprocessableEntityError, host: ArgumentsHost) {
    super.catchError(error, host, 422);
  }
}

export const getExceptionFilters = (localeService: ILocaleService) => [
  new HttpGenericExceptionFilter(localeService),
  new HttpBadRequestExceptionFilter(localeService),
  new HttpNotFoundExceptionFilter(localeService),
  new HttpNotAuthorizedExceptionFilter(localeService),
  new HttpUnprocessableEntityExceptionFilter(localeService),
];

