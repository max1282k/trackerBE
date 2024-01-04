import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AdminRegistration, AdminRegistrationSchema } from './adminSignup.schema';
import { Status, StatusSchema } from './status.schema';
import { EquipmentType, EquipmentTypeSchema } from './equipmentType.schema';
import { DeviceType, DeviceTypeSchema } from './deviceType.schema';

@Schema()
export class Device extends Document {
  @Prop({ type: DeviceTypeSchema })
  deviceType: DeviceType;

  @Prop({ type: EquipmentTypeSchema })
  equipmentType: EquipmentType;

  @Prop()
  organizationId: string;

  @Prop()
  users: [];

  @Prop({ type: StatusSchema })
  status: Status;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);


DeviceSchema.set('timestamps', true);
