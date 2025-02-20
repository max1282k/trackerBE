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
  smartDevice: string;

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
  AI3?: number;

  @Prop()
  user?: string;

  @Prop()
  maintenanceContract?: string;

  @Prop()
  state?: string;

  @Prop()
  parameterGroup?: string;

  @Prop()
  suspectParameter?: string;

  @Prop()
  stateUpdatedAt?: string;

  @Prop()
  torqueMode: string;

  @Prop()
  driverDemandTorquePercentage: number;

  @Prop()
  actualTorquePercentage: number;

  @Prop()
  engineDemandTorquePercentage: number;

  @Prop()
  acceleratorPedalLowIdleSwitch: string;

  @Prop()
  acceleratorPedalKickdownSwitch: string;

  @Prop()
  roadSpeedLimitStatus: string;

  @Prop()
  acceleratorPedalPosition: number;

  @Prop()
  percentLoadAtCurrentSpeed: number;

  @Prop()
  remoteAcceleratorPedalPosition: number;

  @Prop()
  twoSpeedAxleSwitch: string;

  @Prop()
  parkingBrakeSwitch: string;

  @Prop()
  cruiseControlPauseSwitch: string;

  @Prop()
  cruiseControlActive: string;

  @Prop()
  cruiseControlEnableSwitch: string;

  @Prop()
  brakeSwitch: string;

  @Prop()
  clutchSwitch: string;

  @Prop()
  cruiseControlSetSwitch: string;

  @Prop()
  cruiseControlCoastSwitch: string;

  @Prop()
  cruiseControlResumeSwitch: string;

  @Prop()
  cruiseControlAccelerateSwitch: string;

  @Prop()
  cruiseControlSetSpeed: number;

  @Prop()
  ptoState: string;

  @Prop()
  cruiseControlStates: string;

  @Prop()
  idleIncrementSwitch: string;

  @Prop()
  idleDecrementSwitch: string;

  @Prop()
  engineTestModeSwitch: string;

  @Prop()
  engineShutdownOverrideSwitch: string;

  @Prop()
  preFilterOilPressure: number;

  @Prop()
  exhaustGasPressure: number;

  @Prop()
  fuelRackPosition: number;

  @Prop()
  massFlowToEngine: number;

  @Prop()
  instantaneousBrakePower: number;
}

export const EquipmentSchema = SchemaFactory.createForClass(Equipment);
