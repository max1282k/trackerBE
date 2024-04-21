import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Equipment extends Document {
  @Prop()
  manufacturer: string;

  @Prop()
  equipmentModel: string;

  @Prop()
  imei: string;

  @Prop()
  machineName: string;

  @Prop()
  organization: string;

  @Prop()
  machineModel: string;

  @Prop()
  brand: string;

  @Prop()
  category: string;

  @Prop()
  states: string;

  @Prop()
  department: string;

  @Prop()
  maintainanceInterval: string;
  @Prop()
  lastMaintenance: string;

  @Prop()
  initialMaintenance: string;

  @Prop()
  smartDevice: boolean;

  @Prop()
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

  @Prop()
  user?: string;
}

export const EquipmentSchema = SchemaFactory.createForClass(Equipment);
