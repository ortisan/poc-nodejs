import { CauseDto } from "./dto/error.dto";

export class GenericError extends Error {
  constructor(message: string, public readonly causes?: CauseDto[]) {
    super(message);
  }

  static fromError(error: Error): GenericError {
    if (error instanceof GenericError) {
      return error;
    }
    return new GenericError(error.message);
  }
}

export class BadRequestError extends GenericError {
  constructor(message: string, public readonly causes?: CauseDto[]) {
    super(message, causes);
  }
}

export class NotAuthorizedError extends GenericError {
  constructor(message: string, public readonly causes?: CauseDto[]) {
    super(message, causes);
  }
}

export class NotFoundError extends GenericError {
  constructor(message: string, public readonly causes?: CauseDto[]) {
    super(message, causes);
  }
}

export class ConflictError extends GenericError {
  constructor(message: string, public readonly causes?: CauseDto[]) {
    super(message, causes);
  }
}

export class UnprocessableEntityError extends GenericError {
  constructor(message: string, public readonly causes?: CauseDto[]) {
    super(message, causes);
  }
}