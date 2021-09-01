import * as Boom from '@hapi/boom';
import * as Hapi from '@hapi/hapi';
import * as Dotenv from 'dotenv';

Dotenv.config();


interface IResponseMeta {
  operation?: string;
  method?: string;
  paging?: string | null;
}

interface IResponseError {
  code?: string | number;
  message?: string;
  error?: string;
}

interface IResponse<T> {
  data: T[];
  errors: IResponseError[];
}

interface IResponseOptions<T> {
  value?: T | null | undefined;
  boom?: Boom.Boom<any> | null | undefined;
}

export default function createResponse<T>(
  { value = null, boom = null }: IResponseOptions<T>
): IResponse<T> {
  let errors: any = {};
  let data: any = {};

  if (boom) {
    errors = {
      code: boom.output.payload.statusCode,
      error: boom.output.payload.error,
      message: (boom.output.payload.statusCode === 500) ? boom.message : boom.output.payload.message,
    };
    if(boom.output.payload.statusCode === 500 && process.env.NODE_ENV !== "production"){
      errors.orignalError =  boom.stack;
    }
    return errors;
  }

  if (value && data)
    data = value;

  return data;
}
