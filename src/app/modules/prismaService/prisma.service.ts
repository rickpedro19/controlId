import {
  Injectable,
  type INestApplication,
  type OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client/';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit(): Promise<any> {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
