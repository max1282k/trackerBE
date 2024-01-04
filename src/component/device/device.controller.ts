import {
  Controller,
  Post,
  Body,
  Req,
  Get,
  UseGuards,
  Param,
  Query,
} from '@nestjs/common';
import { ApiQuery, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { DeviceService } from './device.service';
import { JwtAdminAuthGuard } from '../auth/jwt-admin.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Device } from '../schema/device.schema';
import { CreateDeviceDTO } from './dto/createDevice.dto';
import { JwtMutualAuthGuard } from '../auth/jwt-mutual.guard';
import { DeleteDeviceDTO } from './dto/deleteDevice.dto';

@ApiTags('Device')
@Controller('device')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @ApiBearerAuth()
  @UseGuards(JwtMutualAuthGuard)
  @UseGuards(JwtAuthGuard)
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 10 })
  @ApiQuery({ name: 'offset', required: false, type: Number, example: 0 })
  @Get('getAllDevices')
  getAllDevices(@Query('limit') limit = 10, @Query('offset') offset = 0) {
    return this.deviceService.getAllDevices(limit, offset);
  }

  @ApiBearerAuth()
  @UseGuards(JwtMutualAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Post('createDevice')
  async createDevice(@Body() deviceData: CreateDeviceDTO) {
    try {
      const newDevice = await this.deviceService.createDevice(deviceData);
      return newDevice;
    } catch (error) {
      // Handle errors or exceptions as per your application's needs
      throw error;
    }
  }
  @ApiBearerAuth()
  @UseGuards(JwtMutualAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Post('deleteDevice')
  async deleteDevice(@Body() deviceData: DeleteDeviceDTO) {
    const deletedDevice = await this.deviceService.deleteDevice(deviceData);
    return deletedDevice;
  }
}
