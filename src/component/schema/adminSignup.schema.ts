// users/user.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';
import { generateStringId } from 'src/utils/utils';

export type AdminRegistrationDocument = HydratedDocument<AdminRegistration>;

@Schema()
export class AdminRegistration {
  @Prop({ type: String, default: generateStringId })
  _id: string;

  @Prop({ required: true })
  admin_email: string;

  @Prop({ required: true })
  role: string;

  @Prop({ required: true })
  organization: string;

  // @Prop({ default: true })
  // isAdmin: boolean;

  // @Prop({ default: false })
  // isSuperAdmin: boolean;

  @Prop({ required: true })
  admin_name: string;

  @Prop({ required: true })
  password: string;
}

export const AdminRegistrationSchema =
  SchemaFactory.createForClass(AdminRegistration);

AdminRegistrationSchema.set('timestamps', true);

AdminRegistrationSchema.set('toJSON', {
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret.__v;
    delete ret._id;
  },
});

AdminRegistrationSchema.set('toObject', {
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret.__v;
    delete ret._id;
  },
});

AdminRegistrationSchema.index({ emadmin_email: 1 });
AdminRegistrationSchema.index({ isAdmin: 1 });
AdminRegistrationSchema.index({ admin_name: 1 });
AdminRegistrationSchema.index({ password: 1 });
