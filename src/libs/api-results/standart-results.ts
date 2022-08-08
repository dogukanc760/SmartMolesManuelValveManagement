import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  statusCode: number;
  message: string;
  data: T;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    try {
      return next.handle().pipe(
        map((data) => ({
          statusCode: data
            ? context.switchToHttp().getResponse().statusCode
            : context.switchToHttp().getResponse().statusCode > 400
            ? 400
            : 500,
          reqId: context.switchToHttp().getRequest().reqId,
          //message: data.message || '',
          message: !data
            ? 'Failed'
            : context.switchToHttp().getResponse().statusCode < 202
            ? 'Success'
            : context.switchToHttp().getResponse().statusCode < 400
            ? 'Redirected'
            : context.switchToHttp().getResponse().statusCode > 400
            ? 'Failed'
            : 'Process Failed',
          data: data,
        })),
      );
    } catch (error) {
      return next.handle().pipe(
        map((data) => ({
          statusCode: 500,
          reqId: context.switchToHttp().getRequest().reqId,
          //message: data.message || '',
          message: !data
            ? 'Failed'
            : context.switchToHttp().getResponse().statusCode < 202
            ? 'Success'
            : context.switchToHttp().getResponse().statusCode < 400
            ? 'Redirected'
            : 'Process Failed',
          data: data,
        })),
      );
    }
  }
}
