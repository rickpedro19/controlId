import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prismaService/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { type LoginPayloadDto } from './dto/loginPayload.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtSevice: JwtService,
  ) {}

  async login(credencials: LoginPayloadDto): Promise<any> {
    const user = await this.prisma.login.findUnique({
      where: {
        email: credencials.email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
      },
    });

    if (!user) {
      throw new BadRequestException('Credenciais invalidas');
    }

    await this.validateUser(credencials.email, credencials.password);

    const payload = {
      sub: user?.id,
      name: user?.name,
      email: user?.email,
      // senha: user?.password,
    };
    const token = this.jwtSevice.sign(payload);
    return {
      access_token: token,
    };
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.login.findUnique({ where: { email } });
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }
    throw new Error('Email address or password provided is incorrect.');
  }
}
