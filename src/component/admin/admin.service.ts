import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin } from '../schema/admin.schema';
import { CreateAdminDTO } from './dto/createAdmin.dto';
import * as nodemailer from 'nodemailer';
import { getAddAdminEmail } from 'src/Email/AddAdminEmail';
import { VerifyAdminDTO } from './dto/verifyAdmin.dto';
import { getAddUserEmail } from 'src/Email/AddUserEmail';
import { Organization } from '../schema/organization.schema';
import { Device } from '../schema/device.schema';
import { DeleteAdminDTO } from './dto/deleteAdmin.dto';

function generateSixDigitNumber() {
  return Math.floor(100000 + Math.random() * 900000);
}

const sixDigitNumber = generateSixDigitNumber();

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name)
    private readonly _adminModel: Model<Admin>,
    @InjectModel(Organization.name)
    private readonly _organizationModel: Model<Organization>,
    @InjectModel(Device.name)
    private readonly _deviceModel: Model<Device>,
  ) {}
  async sendEmail(to, name) {
    const html = getAddAdminEmail(name, to, `${sixDigitNumber}`);
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.GMAIL_MAIL,
        pass: process.env.GMAIL_PASS,
      },
    });
    const mailOptions = {
      from: 'dawoodkhalid33@gmail.com',
      to: to,
      subject: 'Admin Invitation',
      html: html,
      headers: {
        'Content-Type': 'text/html',
      },
    };
    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully.');
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email.');
    }
  }

  async sendEmailUser(to, name) {
    const html = getAddUserEmail(name, to, `${sixDigitNumber}`);
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.GMAIL_MAIL,
        pass: process.env.GMAIL_PASS,
      },
    });
    const mailOptions = {
      from: 'dawoodkhalid33@gmail.com',
      to: to,
      subject: 'Admin Invitation',
      html: html,
      headers: {
        'Content-Type': 'text/html',
      },
    };
    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully.');
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email.');
    }
  }

  async createAdmin(data: CreateAdminDTO) {
    const { email } = data;

    // Check if an admin with the same email already exists
    const existingAdmin = await this._adminModel.findOne({ email }).exec();

    if (existingAdmin) {
      throw new BadRequestException('An admin with this email already exists');
    }

    const payload = data;
    payload.otp = `${sixDigitNumber}`;

    try {
      const newAdmin = await this._adminModel.create(payload);
      if (newAdmin?.role === 'ADMIN') {
        this.sendEmail(newAdmin.email, newAdmin.name);
      }
      if (newAdmin?.role === 'USER') {
        this.sendEmailUser(newAdmin.email, newAdmin.name);
      }

      return newAdmin;
    } catch (error) {
      console.error(error?.message);
      throw new BadRequestException('Failed to create admin');
    }
  }

  async createServer(data: CreateAdminDTO) {
    const { email } = data;

    // Check if an admin with the same email already exists
    const existingAdmin = await this._adminModel.findOne({ email }).exec();

    if (existingAdmin) {
      throw new BadRequestException('A server with this email already exists');
    }

    const payload = data;

    try {
      const newAdmin = await this._adminModel.create(payload);

      return newAdmin;
    } catch (error) {
      console.error(error?.message);
      throw new BadRequestException('Failed to create server');
    }
  }

  async deleteAdmin(data: DeleteAdminDTO) {
    try {
      const deletedAdmin = await this._adminModel.findOneAndDelete({
        email: data.email,
      });

      if (!deletedAdmin) {
        throw new BadRequestException('Admin not found');
      }

      return deletedAdmin;
    } catch (error) {
      console.log(error?.message);
      throw new BadRequestException(error?.message);
    }
  }

  async createVerifiedAdmin(data: CreateAdminDTO) {
    const { email } = data;

    // Check if an admin with the same email already exists
    const existingAdmin = await this._adminModel.findOne({ email }).exec();

    if (existingAdmin) {
      throw new BadRequestException('An admin with this email already exists');
    }

    const payload = data;
    payload.otp = `${sixDigitNumber}`;

    try {
      const newAdmin = await this._adminModel.create(payload);
      return newAdmin;
    } catch (error) {
      console.error(error?.message);
      throw new BadRequestException('Failed to create admin');
    }
  }

  async verifyAdmin(data: VerifyAdminDTO) {
    const { email, otp } = data;

    // Find admin by email and OTP
    const admin = await this._adminModel.findOne({ email, otp }).exec();

    if (!admin) {
      throw new NotFoundException('Admin not found or OTP is incorrect');
    }

    return admin;
  }

  async getStats() {
    const totalOrganizations = (await this._organizationModel.find()).length;
    const totalDevices = (await this._deviceModel.find()).length;
    const totalStats = {
      totalOrganizations,
      totalDevices,
    };

    return { totalStats };
  }
}
