import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class DeviceType extends Document {
  @Prop()
  name: string;

  @Prop()
  maxSupportedCANParams: number;
}

export const DeviceTypeSchema = SchemaFactory.createForClass(DeviceType);
