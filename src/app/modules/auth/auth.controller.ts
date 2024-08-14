import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
// import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LoginPayloadDto } from './dto/loginPayload.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() payload: LoginPayloadDto): Promise<any> {
    return await this.authService.login(payload);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('check')
  getProfile(@Request() req: any): any {
    // console.count('check');

    return req.user;
  }
}
