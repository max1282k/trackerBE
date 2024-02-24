import { Module, DynamicModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EquipmentController } from './equipment.controller';
import { EquipmentService } from './equipment.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../auth/jwt.strategy';
import { Equipment, EquipmentSchema } from '../schema/equipment.schema';

@Module({})
export class EquipmentModule {
  static forRoot(): DynamicModule {
    return {
      imports: [
        MongooseModule.forFeature([
          { name: Equipment.name, schema: EquipmentSchema },
        ]),

        JwtModule.register({
          secret: process.env.JWT_SECRET,
          signOptions: { expiresIn: '9999999999s' },
        }),
      ],

      controllers: [EquipmentController],

      providers: [EquipmentService, JwtStrategy],
      module: EquipmentModule,
    };
  }
}
