import {
  type ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async canActivate(context: ExecutionContext): Promise<any> {
    return await super.canActivate(context);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  handleRequest(err: any, user: any) {
    if (err || !user) {
      throw new UnauthorizedException(err?.message);
    }

    return user;
  }
}
