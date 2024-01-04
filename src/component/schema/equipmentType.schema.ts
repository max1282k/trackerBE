import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Configuration, ConfigurationSchema } from './configuration.schema';

@Schema()
export class EquipmentType extends Document {
  @Prop()
  name: string;

  @Prop({ type: [ConfigurationSchema] })
  configurations: Configuration[];
}

export const EquipmentTypeSchema = SchemaFactory.createForClass(EquipmentType);
