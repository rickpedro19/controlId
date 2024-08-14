import { Test, type TestingModule } from '@nestjs/testing';
import { ConsultaResolver } from './consulta.resolver';
import { ConsultaService } from './consulta.service';

describe('ConsultaResolver', () => {
  let resolver: ConsultaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsultaResolver, ConsultaService],
    }).compile();

    resolver = module.get<ConsultaResolver>(ConsultaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
