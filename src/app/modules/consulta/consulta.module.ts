import { Module } from '@nestjs/common';
import { ConsultaService } from './consulta.service';
import { ConsultaResolver } from './consulta.resolver';
import { PrismaService } from '../prismaService/prisma.service';

@Module({
  providers: [ConsultaResolver, ConsultaService, PrismaService],
})
export class ConsultaModule {}
