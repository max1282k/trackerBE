import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Configuration extends Document {
  @Prop()
  CAN_ID: string;

  @Prop()
  PARAMETER_ID: string;
}

export const ConfigurationSchema = SchemaFactory.createForClass(Configuration);
