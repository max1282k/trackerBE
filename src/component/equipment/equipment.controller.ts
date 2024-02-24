import {
  Controller,
  Post,
  Body,
  UseGuards,
} from '@nestjs/common';
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
}
