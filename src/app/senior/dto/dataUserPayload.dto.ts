import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class DataUserPayloadDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    example: 'Fernando',
  })
  name!: string | null;

  @IsNotEmpty()
  @ApiProperty({
    required: false,
    example: '2023-10-02T10:00:00',
  })
  admission!: Date | null;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    example: 'empresa',
  })
  company!: string | null;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    example: 2,
  })
  codEmploymentPosition!: number | null;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    example: 'Desenvolvedor Front',
  })
  employmentPosition!: string | null;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    example: '08:00 – 17:48 (seg -sex)',
  })
  workingRange!: string | null;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    example: 'Administrativo',
  })
  workShift!: string | null;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    example: 'Perus',
  })
  local!: string | null;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    example: true,
  })
  contractStatus!: boolean | null;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: '37938423472',
  })
  cpf!: string;

  @IsOptional()
  @ApiProperty({
    required: false,
    example: '2002-10-20',
  })
  resignation!: Date | undefined;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    example: 'empresa New (M01)',
  })
  unit!: string | null;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    example: 'TI',
  })
  subDepartamento!: string | null;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    example: 'São Paulo',
  })
  city!: string | null;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    example: 'SP',
  })
  uf!: string | null;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    example: 'Tecnologia',
  })
  departamento!: string | null;

  @IsNotEmpty()
  @ApiProperty({
    required: false,
    example: '2022-10-10',
  })
  birthday!: Date | null;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    example: 'Masculino',
  })
  sexo!: string | null;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    example: 'fer@123',
  })
  username!: string | null;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    example: 'shein',
  })
  role!: string | null;
}
