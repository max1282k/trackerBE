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
import { OrganizationService } from './organization.service';
import { JwtAdminAuthGuard } from '../auth/jwt-admin.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Organization } from '../schema/organization.schema';
import { CreateOrganizationDTO } from './dto/createOrganization.dto';
// import { User } from 'src/decorator/user.decorator';
import { JwtSuperAdminAuthGuard } from '../auth/jwt-superAdmin.guard';
import { User } from 'src/User/user.decorator';
import { DeleteOrganizationDTO } from './dto/deleteOrganization.dto';
import { JwtMutualAuthGuard } from '../auth/jwt-mutual.guard';

@ApiTags('Organization')
@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @ApiBearerAuth()
  @UseGuards(JwtMutualAuthGuard)
  @UseGuards(JwtAuthGuard)
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 10 })
  @ApiQuery({ name: 'offset', required: false, type: Number, example: 0 })
  @Get('getAllOrganizations')
  getAllOrganizations(@Query('limit') limit = 10, @Query('offset') offset = 0) {
    return this.organizationService.getAllOrganizations(limit, offset);
  }

  @ApiBearerAuth()
  @UseGuards(JwtSuperAdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Post('createOrganization')
  async createOrganization(
    @User() user: any,
    @Body() organizationData: CreateOrganizationDTO,
  ) {
    try {
      const newOrganization =
        await this.organizationService.createOrganization(organizationData);
      return newOrganization;
    } catch (error) {
      // Handle errors or exceptions as per your application's needs
      throw error;
    }
  }

  @ApiBearerAuth()
  @UseGuards(JwtSuperAdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Post('deleteOrganization')
  async deleteOrganization(@Body() organizationData: DeleteOrganizationDTO) {
    const deletedOrganization =
      await this.organizationService.deleteOrganization(organizationData);
    return deletedOrganization;
  }
}
