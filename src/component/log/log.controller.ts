import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { LogService } from './log.service';
import { CreateLogDTO } from './dto/createLog.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { JwtServerAuthGuard } from '../auth/jwt-server.guard';

@ApiTags('Logs')
@Controller('logs')
export class LogController {
  constructor(private readonly logService: LogService) {}

  @ApiBearerAuth()
  @UseGuards(JwtServerAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Post('createLog')
  async createLog(@Body() logData: CreateLogDTO) {
    const newLog = await this.logService.createLog(logData);
    return newLog;
  }

  @ApiTags()
  @Get('getAllLogs')
  async getAllLogs(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
  ) {
    const logs = await this.logService.getAllLogs(limit, offset);
    return logs;
  }

  @ApiTags()
  @Post('getCsv')
  async getCsv() {
    const logs = await this.logService.getCsv();
    return logs;
  }

  @ApiTags()
  @Get('getLogsByImei/:imei')
  async getLogsByImei(
    @Param('imei') imei: string,
    @Query('limit') limit: number,
    @Query('offset') offset: number,
  ) {
    const logs = await this.logService.getLogsByImei(imei, limit, offset);
    return logs;
  }
}
