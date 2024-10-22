import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger('HTTP');

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { method, url } = request;
    const body = request.body;

    this.logger.log(
      `Incoming Request: ${method} ${url} - Body: ${JSON.stringify(body)}`,
    );

    const now = Date.now();

    return next.handle().pipe(
      tap((data) => {
        const response = context.switchToHttp().getResponse();
        const { statusCode } = response;

        this.logger.log(
          `Outgoing Response: ${method} ${url} - Status: ${statusCode} - Time: ${Date.now() - now}ms`,
        );
        this.logger.log(`Response Data: ${JSON.stringify(data)}`);
      }),
    );
  }
}
