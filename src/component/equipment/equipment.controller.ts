import { Controller, Post, Body, UseGuards, Get, Param } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { EquipmentService } from './equipment.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateEquipmentDTO } from './dto/createEquipment.dto';
import { JwtSuperAdminAuthGuard } from '../auth/jwt-superAdmin.guard';
import { User } from 'src/User/user.decorator';
import { JwtServerAuthGuard } from '../auth/jwt-server.guard';
import { EditInstantParams } from './dto/instantParams.dto';
import { FixedParamsDTO } from './dto/fixedParams.dto';
import { ImeiDTO } from './dto/imeiDTO.dto';

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
  @Post('editEquipment/:idOrImei')
  async editEquipment(
    @Body() equipmentData: CreateEquipmentDTO,
    @Param('idOrImei') idOrImei: string,
  ) {
    const newEquipment = await this.equipmentService.editEquipment(
      idOrImei,
      equipmentData,
    );
    return newEquipment;
  }

  @ApiBearerAuth()
  @UseGuards(JwtServerAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Post('editInstantParams/:imei')
  async editInstantParams(
    @Body() equipmentData: EditInstantParams,
    @Param('imei') imei: string,
  ) {
    const newEquipment = await this.equipmentService.editInstantParams(
      imei,
      equipmentData,
    );
    return newEquipment;
  }

  @ApiBearerAuth()
  @UseGuards(JwtSuperAdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Post('editFixedParams/:id')
  async editFixedParams(
    @Body() equipmentData: FixedParamsDTO,
    @Param('id') id: string,
  ) {
    const newEquipment = await this.equipmentService.editFixedParams(
      id,
      equipmentData,
    );
    return newEquipment;
  }

  @ApiBearerAuth()
  @UseGuards(JwtSuperAdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Post('editIMEI/:id')
  async editIMEI(@Body() equipmentData: ImeiDTO, @Param('id') id: string) {
    const newEquipment = await this.equipmentService.editIMEI(
      id,
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

  @ApiBearerAuth()
  @UseGuards(JwtSuperAdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Get('getEquipmentById/:id')
  async getEquipmentById(@Param('id') id: string) {
    return this.equipmentService.getEquipmentById(id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtSuperAdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Post('deleteEquipment')
  async deleteEquipment(@Body() deviceData: any) {
    const deletedEquipment = await this.equipmentService.deleteEquipment(deviceData);
    return deletedEquipment;
  }
}
