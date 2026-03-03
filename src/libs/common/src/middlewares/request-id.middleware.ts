import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class RequestIdMiddleware implements NestMiddleware {
  use(
    req: Request & { requestId?: string },
    res: Response,
    next: NextFunction,
  ) {
    const incomingRequestId = req.headers['x-request-id'] as string;

    const requestId = incomingRequestId || uuidv4();

    req.requestId = requestId;

    res.setHeader('x-request-id', requestId);

    next();
  }
}
