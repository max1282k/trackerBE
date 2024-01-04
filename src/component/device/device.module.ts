import { Module, DynamicModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DeviceController } from './device.controller';
import { DeviceService } from './device.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../auth/jwt.strategy';
import { Device, DeviceSchema } from '../schema/device.schema';

@Module({})
export class DeviceModule {
  static forRoot(): DynamicModule {
    return {
      imports: [
        MongooseModule.forFeature([
          { name: Device.name, schema: DeviceSchema },
        ]),

        JwtModule.register({
          secret: process.env.JWT_SECRET,
          signOptions: { expiresIn: '9999999999s' },
        }),
      ],

      controllers: [DeviceController],

      providers: [DeviceService, JwtStrategy],
      module: DeviceModule,
    };
  }
}


