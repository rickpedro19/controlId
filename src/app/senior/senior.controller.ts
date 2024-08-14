import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiParam, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { normalizeReturn } from 'src/app/utils/normalize';
import { SeniorService } from './senior.service';
import { DataUserPayloadDto } from './dto/dataUserPayload.dto';
// import { AuthGuard } from '@nestjs/passport';
import { type SeniorInfo } from './dto/seniorInfo.dto';
import { JwtAuthGuard } from '../modules/auth/guards/jwt-auth.guard';

@Controller('v1/senior-user')
@ApiTags('senior-user')
export class SeniorController {
  constructor(private readonly seniorService: SeniorService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiQuery({
    name: 'cpf',
    type: String,
    required: false,
  })
  @Get('/')
  async getAllUser(
    @Query('cpf') cpf: string,
    @Query('take') take: string,
    @Query('skip') skip: string,
  ): Promise<SeniorInfo[] | null> {
    const users = await this.seniorService.findAll(
      parseInt(take),
      parseInt(skip),
      cpf,
    );

    return normalizeReturn(users);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('/')
  async createUser(@Body() payload: DataUserPayloadDto): Promise<SeniorInfo> {
    const user = await this.seniorService.create(payload);
    return normalizeReturn(user);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiParam({ name: 'id', required: true, type: 'string' })
  @Put('/:id')
  async updateUser(
    @Body() payload: DataUserPayloadDto,
    @Param('id') id: string,
  ): Promise<SeniorInfo[] | null> {
    const userId = parseInt(id);
    const user = await this.seniorService.update(userId, payload);
    return normalizeReturn(user);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiParam({ name: 'id', required: true, type: 'string' })
  @Delete('/:id')
  async deleteUser(@Param('id') id: string): Promise<any> {
    const userId = parseInt(id);
    await this.seniorService.remove(userId);
  }
}
