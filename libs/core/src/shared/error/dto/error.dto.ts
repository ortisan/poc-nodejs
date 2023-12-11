export type CauseProps = {
  code: string;
  message: string;
  arguments: any[];
};

export class CauseDto {
  public code: string;
  public message?: string;
  public arguments?: any[];
  constructor(data: Partial<CauseDto>) {
    Object.assign(this, data);
  }
}

export class ErrorDto {
  message: string;
  causes: CauseDto[];
  stack?: string;
  constructor(data: Partial<ErrorDto>) {
    Object.assign(this, data);
  }
}

export class HttpErrorDto extends ErrorDto {
  statusCode: number;
  constructor(data: Partial<HttpErrorDto>) {
    super(data);
    Object.assign(this, data);
  }
}
