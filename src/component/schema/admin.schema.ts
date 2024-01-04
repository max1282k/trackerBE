import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class Admin extends Document {

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  organization: string;

  @Prop()
  otp: string;

  @Prop()
  role: string;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);


AdminSchema.set('timestamps', true);
