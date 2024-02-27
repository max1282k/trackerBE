import { Controller, Post, Body, UseGuards, Get, Param } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { EquipmentService } from './equipment.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateEquipmentDTO } from './dto/createEquipment.dto';
import { JwtSuperAdminAuthGuard } from '../auth/jwt-superAdmin.guard';
import { User } from 'src/User/user.decorator';

@ApiTags('Equipment')
@Controller('equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @ApiBearerAuth()
  @UseGuards(JwtSuperAdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Post('createEquipment')
  async createEquipment(
    @User() user: any,
    @Body() equipmentData: CreateEquipmentDTO,
  ) {
    const newEquipment =
      await this.equipmentService.createEquipment(equipmentData);
    return newEquipment;
  }

  @ApiBearerAuth()
  @UseGuards(JwtSuperAdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Post('editEquipment/:imei')
  async editEquipment(
    @Body() equipmentData: CreateEquipmentDTO,
    @Param('imei') imei: string,
  ) {
    const newEquipment = await this.equipmentService.editEquipment(
      imei,
      equipmentData,
    );
    return newEquipment;
  }

  @ApiBearerAuth()
  @UseGuards(JwtSuperAdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Get('getEquipment')
  async getEquipment() {
    return this.equipmentService.getEquipment();
  }
}
