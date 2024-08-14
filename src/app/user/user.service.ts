import { Injectable } from '@nestjs/common';
import { type CreateUserDto } from './dto/create-user.dto';
import { type User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../modules/prismaService/prisma.service';

// import { type UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto): Promise<User | any> {
    const data = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };

    const userLogin = await this.prisma.login.create({ data });

    return { ...userLogin, password: undefined };
  }
}
