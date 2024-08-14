import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { ConsultaService } from './consulta.service';
import { Consulta } from './entities/consulta.entity';
import { Device } from './entities/device.entity';
import { type devices } from '@prisma/client';

@Resolver(() => Device)
export class ConsultaResolver {
  constructor(private readonly consultaService: ConsultaService) {}

  @Query(() => [Device], { name: 'devices', nullable: true })
  async findAll(): Promise<devices[] | null> {
    return await this.consultaService.findAll();
  }

  @Query(() => Consulta, { name: 'getLogsByTime' })
  async findOne(@Args('id', { type: () => Int }) id: number): Promise<any> {
    return await this.consultaService.findOne(id);
  }

  @Query(() => String)
  async hello(): Promise<string> {
    return 'hello';
  }
}
