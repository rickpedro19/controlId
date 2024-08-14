import { BadRequestException, Injectable } from '@nestjs/common';
// import { type CreateSeniorInput } from './dto/create-senior.input';
// import { type UpdateSeniorInput } from './dto/update-senior.input';
// import { type senior } from './dto/senior.model';
import { PrismaService } from 'nestjs-prisma';
import { type SeniorInfo } from './dto/seniorInfo.dto';
import { type DataUserPayloadDto } from './dto/dataUserPayload.dto';
import { isNumber } from 'class-validator';
import { removeDigits } from '../utils/removeDigits';
// import { removeDigits } from '../utils/removeDigits';

@Injectable()
export class SeniorService {
  httpService: any;
  constructor(private readonly prisma: PrismaService) {}
  async create(createSeniorInput: DataUserPayloadDto): Promise<SeniorInfo> {
    const {
      name,
      admission,
      company,
      codEmploymentPosition,
      employmentPosition,
      workingRange,
      workShift,
      local,
      contractStatus,
      cpf,
      resignation,
      unit,
      subDepartamento,
      city,
      uf,
      departamento,
      birthday,
      sexo,
      username,
      role,
    } = createSeniorInput;

    const validcpf = await this.prisma.senior.findUnique({
      where: {
        CPF: cpf ?? '',
      },
      select: {
        CPF: true,
      },
    });

    if (validcpf?.CPF) {
      throw new BadRequestException('CPF já cadastrado!');
    }

    const newSenior = await this.prisma.senior.create({
      data: {
        name,
        admission: new Date(admission as Date),
        company,
        cod_employment_position: codEmploymentPosition,
        employment_position: employmentPosition,
        working_range: workingRange,
        work_shift: workShift,
        local,
        contract_status: contractStatus,
        CPF: removeDigits(cpf),
        resignation: new Date(resignation as Date),
        unit,
        sub_departamento: subDepartamento,
        city,
        uf,
        departamento,
        birthday: new Date(birthday as Date),
        sexo,
        username,
        role,
      },
    });

    return newSenior;
  }

  async findAll(pag: number, quant: number, cpf: string): Promise<any> {
    const [{ _count }, registres] = await Promise.all([
      await this.prisma.senior.aggregate({
        where: {
          contract_status: true,
        },
        _count: true,
      }),
      await this.prisma.senior.findMany({
        where: {
          contract_status: true,
          CPF: cpf,
        },
        take: isNumber(pag) ? pag : 10,
        skip: isNumber(quant) ? quant : 0,
      }),
    ]);

    return { length: _count, data: registres };
  }

  async findmany(name: string): Promise<any> {
    const registres = await this.prisma.senior.findMany({
      where: {
        name: {
          contains: name,
        },
      },
    });

    return registres;
  }

  async findAllNumber(): Promise<any> {
    const registres = await this.prisma.senior.aggregate({ _count: true });
    return registres._count;
  }

  findOne(id: number): string {
    return `This action returns a #${id} senior`;
  }

  async update(
    id: number,
    updateSeniorInput: DataUserPayloadDto,
  ): Promise<any> {
    const {
      name,
      admission,
      company,
      codEmploymentPosition,
      employmentPosition,
      workingRange,
      workShift,
      local,
      contractStatus,
      cpf,
      resignation,
      unit,
      subDepartamento,
      city,
      uf,
      departamento,
      birthday,
      sexo,
      username,
      role,
    } = updateSeniorInput;

    const updatedSenior = await this.prisma.senior.update({
      where: { id },
      data: {
        name,
        admission: new Date(admission as Date),
        company,
        cod_employment_position: codEmploymentPosition,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        employment_position: employmentPosition,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        working_range: workingRange,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        work_shift: workShift,
        local,
        contract_status: contractStatus,
        CPF: removeDigits(cpf),
        resignation: new Date(resignation as Date),
        unit,
        sub_departamento: subDepartamento,
        city,
        uf,
        departamento,
        birthday: new Date(birthday as Date),
        sexo,
        username,
        role,
      },
    });

    return updatedSenior;
  }

  async remove(id: number): Promise<string> {
    const date = new Date();
    console.log(date);
    await this.prisma.senior.update({
      where: { id },
      data: {
        contract_status: false,
        resignation: date,
      },
    });
    return 'deleted';
  }
}
