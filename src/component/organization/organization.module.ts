import { Module, DynamicModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../auth/jwt.strategy';
import { Organization, OrganizationSchema } from '../schema/organization.schema';

@Module({})
export class OrganizationModule {
  static forRoot(): DynamicModule {
    return {
      imports: [
        MongooseModule.forFeature([
          { name: Organization.name, schema: OrganizationSchema },
        ]),

        JwtModule.register({
          secret: process.env.JWT_SECRET,
          signOptions: { expiresIn: '9999999999s' },
        }),
      ],

      controllers: [OrganizationController],

      providers: [OrganizationService, JwtStrategy],
      module: OrganizationModule,
    };
  }
}
