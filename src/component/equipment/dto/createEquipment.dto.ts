import { ApiProperty } from '@nestjs/swagger';

export class CreateEquipmentDTO {
  @ApiProperty()
  imei: string;

  @ApiProperty()
  manufacturer: string;

  @ApiProperty()
  machineName: string;

  @ApiProperty()
  organization: string;

  @ApiProperty()
  machineModel?: string;

  @ApiProperty()
  brand: string;

  @ApiProperty()
  category: string;

  @ApiProperty()
  states: string;

  @ApiProperty()
  department: string;

  @ApiProperty()
  maintainanceInterval: string;

  @ApiProperty()
  lastMaintenance: string;

  @ApiProperty()
  initialMaintenance: string;

  @ApiProperty()
  smartDevice: string;

  @ApiProperty()
  serialNumber: string;

  @ApiProperty()
  equipmentModel: string;

  @ApiProperty()
  speed?: string;

  @ApiProperty()
  rpm?: string;

  @ApiProperty()
  fuelLevel?: string;

  @ApiProperty()
  odometer?: string;

  @ApiProperty()
  hourMeter?: string;

  @ApiProperty()
  hydraulicPressure?: string;

  @ApiProperty()
  track?: string;

  @ApiProperty()
  boomAngle?: string;

  @ApiProperty()
  engineTemperature?: string;

  @ApiProperty()
  brakeFluidLevel?: string;

  @ApiProperty()
  engineOilLevel?: string;

  @ApiProperty()
  gearOilLevel?: string;

  @ApiProperty()
  engineWarningPID?: string;

  @ApiProperty()
  hydraulicWarningPID?: string;

  @ApiProperty()
  electronicsWarningPID?: string;

  @ApiProperty()
  brakeWarningPID?: string;

  @ApiProperty()
  transmissionWarningPID?: string;

  @ApiProperty()
  latitude?: number;

  @ApiProperty()
  longitude?: number;

  @ApiProperty()
  batteryVoltage?: number;

  @ApiProperty()
  hoursOfOperation?: number;

  @ApiProperty()
  DI1?: number;

  @ApiProperty()
  DI2?: number;

  @ApiProperty()
  DO1?: number;

  @ApiProperty()
  DO2?: number;

  @ApiProperty()
  AI1?: number;

  @ApiProperty()
  AI2?: number;

  @ApiProperty()
  AI3?: number;

  @ApiProperty()
  user?: string;

  @ApiProperty()
  maintenanceContract?: string;

  @ApiProperty()
  state?: string;

  @ApiProperty()
  parameterGroup?: string;

  @ApiProperty()
  suspectParameter?: string;

  @ApiProperty()
  stateUpdatedAt?: string;

  @ApiProperty()
  torqueMode: string;

  @ApiProperty()
  driverDemandTorquePercentage: number;

  @ApiProperty()
  actualTorquePercentage: number;

  @ApiProperty()
  engineDemandTorquePercentage: number;

  @ApiProperty()
  acceleratorPedalLowIdleSwitch: string;

  @ApiProperty()
  acceleratorPedalKickdownSwitch: string;

  @ApiProperty()
  roadSpeedLimitStatus: string;

  @ApiProperty()
  acceleratorPedalPosition: number;

  @ApiProperty()
  percentLoadAtCurrentSpeed: number;

  @ApiProperty()
  remoteAcceleratorPedalPosition: number;

  @ApiProperty()
  twoSpeedAxleSwitch: string;

  @ApiProperty()
  parkingBrakeSwitch: string;

  @ApiProperty()
  cruiseControlPauseSwitch: string;

  @ApiProperty()
  cruiseControlActive: string;

  @ApiProperty()
  cruiseControlEnableSwitch: string;

  @ApiProperty()
  brakeSwitch: string;

  @ApiProperty()
  clutchSwitch: string;

  @ApiProperty()
  cruiseControlSetSwitch: string;

  @ApiProperty()
  cruiseControlCoastSwitch: string;

  @ApiProperty()
  cruiseControlResumeSwitch: string;

  @ApiProperty()
  cruiseControlAccelerateSwitch: string;

  @ApiProperty()
  cruiseControlSetSpeed: number;

  @ApiProperty()
  ptoState: string;

  @ApiProperty()
  cruiseControlStates: string;

  @ApiProperty()
  idleIncrementSwitch: string;

  @ApiProperty()
  idleDecrementSwitch: string;

  @ApiProperty()
  engineTestModeSwitch: string;

  @ApiProperty()
  engineShutdownOverrideSwitch: string;

  @ApiProperty()
  preFilterOilPressure: number;

  @ApiProperty()
  exhaustGasPressure: number;

  @ApiProperty()
  fuelRackPosition: number;

  @ApiProperty()
  massFlowToEngine: number;

  @ApiProperty()
  instantaneousBrakePower: number;
}
