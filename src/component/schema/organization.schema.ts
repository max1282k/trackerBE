import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Organization extends Document {

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  usersCount: number;
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);
