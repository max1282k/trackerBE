import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './component/auth/auth.module';
import { OrganizationModule } from './component/organization/organization.module';
import { DeviceModule } from './component/device/device.module';
import { AdminModule } from './component/admin/admin.module';
import { EquipmentModule } from './component/equipment/equipment.module';
import { LogModule } from './component/log/log.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL),
    AuthModule.forRoot(),
    OrganizationModule.forRoot(),
    DeviceModule.forRoot(),
    AdminModule.forRoot(),
    EquipmentModule.forRoot(),
    LogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
