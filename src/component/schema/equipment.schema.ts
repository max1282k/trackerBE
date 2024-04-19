import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Equipment extends Document {
  @Prop()
  manufacturer: string;

  @Prop()
  equipmentModel: string;

  @Prop({ required: true })
  imei: string;

  @Prop({ required: true })
  machineName: string;

  @Prop({ required: true })
  organization: string;

  @Prop({ required: true })
  machineModel: string;

  @Prop({ required: true })
  brand: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  states: string;

  @Prop({ required: true })
  department: string;

  @Prop({ required: true })
  interval: string;
  @Prop({ required: true })
  lastMaintenance: string;

  @Prop({ required: true })
  initialMaintenance: string;

  @Prop({ required: true })
  smartDevice: boolean;

  @Prop({ required: true })
  serialNumber: string;

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

  @Prop()
  latitude?: number;

  @Prop()
  longitude?: number;

  @Prop()
  batteryVoltage?: number;

  @Prop()
  hoursOfOperation?: number;

  @Prop()
  DI1?: number;

  @Prop()
  DI2?: number;

  @Prop()
  DO1?: number;

  @Prop()
  DO2?: number;

  @Prop()
  AI1?: number;

  @Prop()
  AI2?: number;
}

export const EquipmentSchema = SchemaFactory.createForClass(Equipment);
