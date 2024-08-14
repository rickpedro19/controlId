import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.strategy';
import { PrismaService } from '../prismaService/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt-auth.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_TOKEN,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [AuthController],
  providers: [JwtStrategy, AuthService, LocalStrategy, PrismaService],
})
export class AuthModule {}
