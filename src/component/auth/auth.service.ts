import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { Model } from 'mongoose';
import { RegisterDTO } from './dto/register.dto';
import { LoginDTO } from './dto/login.dto';
import { AdminRegistrationDTO } from './dto/adminRegistration.dto';
import { AdminLoginDTO } from './dto/adminLogin.dto';
import { AdminRegistration } from '../schema/adminSignup.schema';
import { web3 } from 'src/web3/web3.utils';
import * as nodemailer from 'nodemailer';
import { DeleteAdminRegistrationDTO } from './dto/deleteAdminRegistration.dto';
import { AdminFiltrationDTO } from './dto/adminFiltration.dto';

const message = 'this is signature message for soul';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(AdminRegistration.name)
    private readonly _adminRegistrationModel: Model<AdminRegistration>,
  ) {}

  private generateJwtToken(payload: any): string {
    const token = `Bearer ${jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '4h',
    })}`;
    return token;
  }

  async adminRegistration(adminRegistrationDto: AdminRegistrationDTO) {
    try {
      const existingUser = await this._adminRegistrationModel.findOne({
        admin_email: adminRegistrationDto.admin_email.toLowerCase(),
      });

      if (existingUser) {
        throw new BadRequestException('Email address is already registered');
      }

      adminRegistrationDto.admin_email =
        adminRegistrationDto.admin_email.toLowerCase();
      const adminRegistration = new this._adminRegistrationModel(
        adminRegistrationDto,
      );

      const hashedPassword = await bcrypt.hash(
        adminRegistrationDto.password,
        10,
      ); // 10 is the salt rounds
      adminRegistration.password = hashedPassword;

      await adminRegistration.save();

      const { password, ...userWithoutSensitiveData } =
        adminRegistration.toObject();

      return { admin: userWithoutSensitiveData };
    } catch (error) {
      console.log('error', error?.message);
      throw new BadRequestException(error?.message);
    }
  }

  async deleteAdminRegistration(data: DeleteAdminRegistrationDTO) {
    try {
      const deletedAdminRegistration =
        await this._adminRegistrationModel.findOneAndDelete({
          admin_email: data.email,
        });

      if (!deletedAdminRegistration) {
        throw new BadRequestException('Admin not found');
      }

      return deletedAdminRegistration;
    } catch (error) {
      console.log(error?.message);
      throw new BadRequestException(error?.message);
    }
  }

  async getAdminsByOrganization(data: AdminFiltrationDTO, limit, offset) {
    try {
      limit = limit ? Number(limit) : 10;
      offset = offset ? Number(offset) : 0;

      const totalCount = (
        await this._adminRegistrationModel.find({
          organization: data.organization,
          role: 'ADMIN',
        })
      ).length;

      const adminsByOrganization = await this._adminRegistrationModel
        .find({ organization: data.organization, role: 'ADMIN' })
        .skip(offset)
        .limit(limit);

      if (adminsByOrganization.length === 0) {
        throw new NotFoundException('No admin found for this organization');
      }

      return { admins: adminsByOrganization, totalCount };
    } catch (error) {
      console.log('error', error?.message);
      throw new InternalServerErrorException(error?.message);
    }
  }

  async getUsersByOrganization(data: AdminFiltrationDTO, limit, offset) {
    try {
      limit = limit ? Number(limit) : 10;
      offset = offset ? Number(offset) : 0;

      const totalCount = (
        await this._adminRegistrationModel.find({
          organization: data.organization,
          role: 'USER',
        })
      ).length;

      const usersByOrganization = await this._adminRegistrationModel
        .find({ organization: data.organization, role: 'USER' })
        .skip(offset)
        .limit(limit);

      if (usersByOrganization.length === 0) {
        throw new NotFoundException('No users found for this organization');
      }

      return { users: usersByOrganization, totalCount };
    } catch (error) {
      console.log('error', error?.message);
      throw new InternalServerErrorException(error?.message);
    }
  }

  async getLogedInUser(user) {
    try {
      return { user };
    } catch (error) {
      console.log('error', error?.message);
      throw new BadRequestException(error?.message);
    }
  }

  async adminLogin(adminLoginDto: AdminLoginDTO) {
    try {
      adminLoginDto.admin_email = adminLoginDto?.admin_email?.toLowerCase();
      const admin = await this._adminRegistrationModel.findOne({
        admin_email: adminLoginDto.admin_email,
      });

      if (!admin) {
        throw new BadRequestException('Admin not found');
      }

      const isPasswordMatch = await bcrypt.compare(
        adminLoginDto.password,
        admin.password,
      );

      if (!isPasswordMatch) {
        throw new BadRequestException('Invalid password');
      }

      const payload = {
        id: admin._id,
        name: admin.admin_name,
        email: admin.admin_email,
        organization: admin.organization,
        // isAdmin: admin.isAdmin,
        // isSuperAdmin: admin.isSuperAdmin,
        role: admin.role,
      };

      const token = this.generateJwtToken(payload);
      return {
        id: admin._id,
        name: admin.admin_name,
        email: admin.admin_email,
        organization: admin.organization,
        // isAdmin: admin.isAdmin,
        // isSuperAdmin: admin.isSuperAdmin,
        role: admin.role,
        token,
      };
    } catch (error) {
      console.log('error', error?.message);
      throw new BadRequestException(error?.message);
    }
  }

  async serverLogin(adminLoginDto: AdminLoginDTO) {
    try {
      adminLoginDto.admin_email = adminLoginDto?.admin_email?.toLowerCase();
      const admin = await this._adminRegistrationModel.findOne({
        admin_email: adminLoginDto.admin_email,
      });

      if (!admin) {
        throw new BadRequestException('Admin not found');
      }

      const isPasswordMatch = await bcrypt.compare(
        adminLoginDto.password,
        admin.password,
      );

      if (!isPasswordMatch) {
        throw new BadRequestException('Invalid password');
      }

      const payload = {
        id: admin._id,
        name: admin.admin_name,
        email: admin.admin_email,
        organization: admin.organization,
        // isAdmin: admin.isAdmin,
        // isSuperAdmin: admin.isSuperAdmin,
        role: admin.role,
      };

      const token = this.generateJwtToken(payload);
      return {
        id: admin._id,
        name: admin.admin_name,
        email: admin.admin_email,
        organization: admin.organization,
        // isAdmin: admin.isAdmin,
        // isSuperAdmin: admin.isSuperAdmin,
        role: admin.role,
        token,
      };
    } catch (error) {
      console.log('error', error?.message);
      throw new BadRequestException(error?.message);
    }
  }

  async getAllAdmins(limit, offset) {
    try {
      limit = limit ? Number(limit) : 10;
      offset = offset ? Number(offset) : 0;
      const totalCount = (
        await this._adminRegistrationModel.find({
          role: { $in: ['ADMIN', 'SERVER'] },
        })
      ).length;
      const admins = await this._adminRegistrationModel
        .find({ role: { $in: ['ADMIN', 'SERVER'] } })
        .skip(offset)
        .limit(limit);
      if (admins.length === 0) {
        throw new NotFoundException('No admin found');
      }
      return { admins, totalCount };
    } catch (error) {
      console.log('error', error?.message);
      throw new InternalServerErrorException(error?.message);
    }
  }

  async getAllUsers(limit, offset) {
    try {
      limit = limit ? Number(limit) : 10;
      offset = offset ? Number(offset) : 0;
      const totalCount = (
        await this._adminRegistrationModel.find({ role: 'USER' })
      ).length;
      const users = await this._adminRegistrationModel
        .find({ role: 'USER' })
        .skip(offset)
        .limit(limit);
      if (users.length === 0) {
        throw new NotFoundException('No users found with role USER');
      }
      return { users, totalCount };
    } catch (error) {
      console.log('error', error?.message);
      throw new InternalServerErrorException(error?.message);
    }
  }

  async getAllOrganizations() {
    try {
      const admins = await this._adminRegistrationModel.find();
      if (admins.length === 0) {
        throw new NotFoundException('No admin found');
      }
      return { admins };
    } catch (error) {
      console.log('error', error?.message);
      throw new InternalServerErrorException(error?.message);
    }
  }

  verifyToken(token: string): any {
    console.log(token);
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      return decoded;
    } catch (error) {
      return null;
    }
  }
}
