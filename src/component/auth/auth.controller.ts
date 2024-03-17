import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Res,
  Query,
} from '@nestjs/common';
import { ApiQuery, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dto/register.dto';
import { AdminRegistrationDTO } from './dto/adminRegistration.dto';
import { AdminLoginDTO } from './dto/adminLogin.dto';
import { LoginDTO } from './dto/login.dto';
import { JwtMutualAuthGuard } from './jwt-mutual.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { JwtSuperAdminAuthGuard } from './jwt-superAdmin.guard';
import { VerifyTokenDTO } from './dto/verifyToken.dto';
import { User } from 'src/User/user.decorator';
import { DeleteAdminRegistrationDTO } from './dto/deleteAdminRegistration.dto';
import { AdminFiltrationDTO } from './dto/adminFiltration.dto';
import { Response } from 'express';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @Post('login')
  // login(@Body() LoginDto: LoginDTO) {
  //   return this.authService.loginUser(LoginDto);
  // }

  // @Post('register')
  // register(@Body() registerDto: RegisterDTO) {
  //   return this.authService.register(registerDto);
  // }

  @Post('adminRegistration')
  adminRegisteration(
    @Body() adminRegistrationDto: AdminRegistrationDTO,
    @Res({ passthrough: true }) response: Response,
  ) {
    response.cookie('key', 'value');
    return this.authService.adminRegistration(adminRegistrationDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtSuperAdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Post('deleteAdminRegistration')
  async deleteAdminRegistration(
    @Body() adminRegistrationData: DeleteAdminRegistrationDTO,
  ) {
    const deletedAdminRegistration =
      await this.authService.deleteAdminRegistration(adminRegistrationData);
    return deletedAdminRegistration;
  }

  @ApiBearerAuth()
  @UseGuards(JwtSuperAdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 10 })
  @ApiQuery({ name: 'offset', required: false, type: Number, example: 0 })
  @Post('getAdminsByOrganization')
  async getAdminsByOrganization(
    @Body() data: AdminFiltrationDTO,
    @Query('limit') limit = 10,
    @Query('offset') offset = 0,
  ) {
    const filteredAdmins = await this.authService.getAdminsByOrganization(
      data,
      limit,
      offset,
    );
    return {
      admins: filteredAdmins.admins,
      totalCount: filteredAdmins.totalCount,
    };
  }

  @ApiBearerAuth()
  @UseGuards(JwtSuperAdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 10 })
  @ApiQuery({ name: 'offset', required: false, type: Number, example: 0 })
  @Post('getUsersByOrganization')
  async getUsersByOrganization(
    @Body() data: AdminFiltrationDTO,
    @Query('limit') limit = 10,
    @Query('offset') offset = 0,
  ) {
    const filteredUsers = await this.authService.getUsersByOrganization(
      data,
      limit,
      offset,
    );
    return { users: filteredUsers.users, totalCount: filteredUsers.totalCount };
  }

  @Post('adminLogin')
  async adminLogin(
    @Body() adminLoginDto: AdminLoginDTO,
    @Res({ passthrough: true }) response: Response,
  ) {
    const data = await this.authService.adminLogin(adminLoginDto);
    const { token } = data;
    response.cookie('token', token, { httpOnly: true, secure: true });
    return this.authService.adminLogin(adminLoginDto);
  }

  @Post('serverLogin')
  async serverLogin(
    @Body() adminLoginDto: AdminLoginDTO,
    @Res({ passthrough: true }) response: Response,
  ) {
    const data = await this.authService.serverLogin(adminLoginDto);
    const { token } = data;
    response.cookie('token', token, { httpOnly: true, secure: true });
    return this.authService.serverLogin(adminLoginDto);
  }

  @ApiBearerAuth()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('getLogedInUser')
  getLoggedUser(@User() user) {
    return this.authService.getLogedInUser(user);
  }

  @ApiBearerAuth()
  @UseGuards(JwtSuperAdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 10 })
  @ApiQuery({ name: 'offset', required: false, type: Number, example: 0 })
  @Get('getAllAdmins')
  getAllAdmins(@Query('limit') limit = 10, @Query('offset') offset = 0) {
    return this.authService.getAllAdmins(limit, offset);
  }

  @ApiBearerAuth()
  @UseGuards(JwtMutualAuthGuard)
  @UseGuards(JwtAuthGuard)
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 10 })
  @ApiQuery({ name: 'offset', required: false, type: Number, example: 0 })
  @Get('getAllUsers')
  getAllUsers(@Query('limit') limit = 10, @Query('offset') offset = 0) {
    return this.authService.getAllUsers(limit, offset);
  }

  @Post('verifyToken')
  verifyToken(@Body() verifyTokenDto: VerifyTokenDTO) {
    if (!verifyTokenDto) {
      return { message: 'No token provided' };
    }

    const decodedToken = this.authService.verifyToken(verifyTokenDto.token);

    if (!decodedToken) {
      return { message: 'Invalid token' };
    }

    return { decodedToken };
  }
}
