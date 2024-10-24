import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Log extends Document {
  @Prop()
  imei: string;

  @Prop()
  data: string;
}

export const LogSchema = SchemaFactory.createForClass(Log);
