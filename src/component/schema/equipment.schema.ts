import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Equipment extends Document {
  @Prop({ required: true })
  manufacturer: string;

  @Prop({ required: true })
  equipmentModel: string;

  @Prop()
  speed?: string;

  @Prop()
  rpm?: string;

  @Prop()
  fuelLevel?: string;

  @Prop()
  odometer?: string;

  @Prop()
  hourMeter?: string;

  @Prop()
  hydraulicPressure?: string;

  @Prop()
  track?: string;

  @Prop()
  boomAngle?: string;

  @Prop()
  engineTemperature?: string;

  @Prop()
  brakeFluidLevel?: string;

  @Prop()
  engineOilLevel?: string;

  @Prop()
  gearOilLevel?: string;

  @Prop()
  engineWarningPID?: string;

  @Prop()
  hydraulicWarningPID?: string;

  @Prop()
  electronicsWarningPID?: string;

  @Prop()
  brakeWarningPID?: string;

  @Prop()
  transmissionWarningPID?: string;
}

export const EquipmentSchema = SchemaFactory.createForClass(Equipment);
