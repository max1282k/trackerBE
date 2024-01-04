import { Module, DynamicModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../auth/jwt.strategy';
import { Admin, AdminSchema } from '../schema/admin.schema';
import { Organization, OrganizationSchema } from '../schema/organization.schema';
import { Device, DeviceSchema } from '../schema/device.schema';

@Module({})
export class AdminModule {
  static forRoot(): DynamicModule {
    return {
      imports: [
        MongooseModule.forFeature([
          { name: Admin.name, schema: AdminSchema },
          { name: Organization.name, schema: OrganizationSchema },
          { name: Device.name, schema: DeviceSchema },
        ]),

        JwtModule.register({
          secret: process.env.JWT_SECRET,
          signOptions: { expiresIn: '9999999999s' },
        }),
      ],

      controllers: [AdminController],

      providers: [AdminService, JwtStrategy],
      module: AdminModule,
    };
  }
}
