import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Status extends Document {
  @Prop()
  parameter1: string;

  @Prop()
  parameter2: string;
}

export const StatusSchema = SchemaFactory.createForClass(Status);
