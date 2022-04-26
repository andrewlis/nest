import { HttpException, HttpStatus } from '@nestjs/common';

export class ForbiddenException extends HttpException {
  constructor(props) {
    super('Forbidden', HttpStatus.FORBIDDEN);
  }
}
