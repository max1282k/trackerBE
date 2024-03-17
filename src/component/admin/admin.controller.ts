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
import { AdminService } from './admin.service';
import { JwtAdminAuthGuard } from '../auth/jwt-admin.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Admin } from '../schema/admin.schema';
import { CreateAdminDTO } from './dto/createAdmin.dto';
// import { User } from 'src/decorator/user.decorator';
import { JwtSuperAdminAuthGuard } from '../auth/jwt-superAdmin.guard';
import { User } from 'src/User/user.decorator';
import { VerifyAdminDTO } from './dto/verifyAdmin.dto';
import { DeleteDeviceDTO } from '../device/dto/deleteDevice.dto';
import { DeleteAdminDTO } from './dto/deleteAdmin.dto';

@ApiTags('Admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiBearerAuth()
  @UseGuards(JwtSuperAdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Post('createAdmin')
  async createAdmin(@User() user: any, @Body() adminData: CreateAdminDTO) {
    try {
      const newAdmin = await this.adminService.createAdmin(adminData);
      return newAdmin;
    } catch (error) {
      // Handle errors or exceptions as per your application's needs
      throw error;
    }
  }

  @ApiBearerAuth()
  @UseGuards(JwtSuperAdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Post('deleteAdmin')
  async deleteAdmin(@Body() adminData: DeleteAdminDTO) {
    const deletedAdmin = await this.adminService.deleteAdmin(adminData);
    return deletedAdmin;
  }

  @ApiBearerAuth()
  @UseGuards(JwtSuperAdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Post('createVerifiedAdmin')
  async createVerifiedAdmin(
    @User() user: any,
    @Body() adminData: CreateAdminDTO,
  ) {
    try {
      const newAdmin = await this.adminService.createVerifiedAdmin(adminData);
      return newAdmin;
    } catch (error) {
      // Handle errors or exceptions as per your application's needs
      throw error;
    }
  }

  // @ApiBearerAuth()
  // @UseGuards(JwtSuperAdminAuthGuard)
  // @UseGuards(JwtAuthGuard)
  @Post('verifyAdmin')
  async verifyAdmin(@Body() adminData: VerifyAdminDTO) {
    try {
      const newAdmin = await this.adminService.verifyAdmin(adminData);
      return newAdmin;
    } catch (error) {
      // Handle errors or exceptions as per your application's needs
      throw error;
    }
  }

  @Get('getStats')
  async getStats() {
    return this.adminService.getStats();
  }
}
