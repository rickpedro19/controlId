import { Module } from '@nestjs/common';
import { SeniorService } from './senior.service';
import { SeniorController } from './senior.controller';
import { PrismaService } from '../modules/prismaService/prisma.service';

@Module({
  controllers: [SeniorController],
  providers: [SeniorService, PrismaService],
})
export class SeniorModule {}
