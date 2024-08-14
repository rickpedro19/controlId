import { Injectable } from '@nestjs/common';
import { type devices } from '@prisma/client';
import { PrismaService } from '../prismaService/prisma.service';

@Injectable()
export class ConsultaService {
  constructor(private readonly prisma: PrismaService) {}
  async findAll(): Promise<devices[] | null> {
    const devices = await this.prisma.devices.findMany();
    return devices;
  }

  async findOne(id: number): Promise<any> {
    return `This action returns a #${id} consulta`;
  }
}
