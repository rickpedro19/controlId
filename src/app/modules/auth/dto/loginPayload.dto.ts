import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginPayloadDto {
  @ApiProperty({
    required: true,
    example: 'carla@gmail.com',
  })
  @IsNotEmpty()
  email!: string;

  @ApiProperty({
    required: true,
    example: '1234',
  })
  @IsNotEmpty()
  password!: string;
}
