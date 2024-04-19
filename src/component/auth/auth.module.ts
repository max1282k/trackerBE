import { Module, DynamicModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import {
  AdminRegistrationSchema,
  AdminRegistration,
} from '../schema/adminSignup.schema';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({})
export class AuthModule {
  static forRoot(): DynamicModule {
    return {
      imports: [
        MongooseModule.forFeature([
          { name: AdminRegistration.name, schema: AdminRegistrationSchema },
        ]),

        JwtModule.register({
          secret: process.env.JWT_SECRET,
          signOptions: { expiresIn: '30s' },
        }),
      ],

      controllers: [AuthController],
      providers: [AuthService, JwtStrategy],
      module: AuthModule,
    };
  }
}
