import { ApiProperty } from '@nestjs/swagger';

export class CreateEquipmentDTO {
  @ApiProperty()
  manufacturer: string;

  @ApiProperty()
  equipmentModel: string;

  @ApiProperty()
  imei: string;

  @ApiProperty()
  machineName: string;

  @ApiProperty()
  organization: string;

  @ApiProperty()
  machineModel: string;

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

  // New parameters added
  @ApiProperty()
  asrEngineControlActive?: string;

  @ApiProperty()
  asrBrakeControlActive?: string;

  @ApiProperty()
  absActive?: string;

  @ApiProperty()
  ebsBrakeSwitch?: string;

  @ApiProperty()
  brakePedalPosition?: number;

  @ApiProperty()
  absOffRoadSwitch?: string;

  @ApiProperty()
  asrOffRoadSwitch?: string;

  @ApiProperty()
  asrHillHolderSwitch?: string;

  @ApiProperty()
  tractionControlOverrideSwitch?: string;

  @ApiProperty()
  acceleratorInterlockSwitch?: string;

  @ApiProperty()
  engineDerateSwitch?: string;

  @ApiProperty()
  auxEngineShutdownSwitch?: string;

  @ApiProperty()
  remoteAcceleratorEnableSwitch?: string;

  @ApiProperty()
  engineRetarderSelection?: string;

  @ApiProperty()
  absFullyOperational?: string;

  @ApiProperty()
  ebsRedWarningSignal?: string;

  @ApiProperty()
  absEbsAmberWarningSignal?: string;

  @ApiProperty()
  atcAsrInformationSignal?: string;

  @ApiProperty()
  sourceAddressOfBrakeControl?: string;

  @ApiProperty()
  trailerAbsStatus?: string;

  @ApiProperty()
  trailerAbsWarning?: string;

  @ApiProperty()
  percentLoatAtCurrentSpeed?: number; // Note: This appears to be a typo for "Load"

  @ApiProperty()
  actualToquePercentage?: number; // Note: This appears to be a typo for "Torque"

  @ApiProperty()
  nominalFrictionTorquePercentage?: number;

  @ApiProperty()
  engineDesiredOperatingSpeed?: number;

  @ApiProperty()
  engineDesiredOperatingSpeedAssymetryAdjustment?: number;

  @ApiProperty()
  powerTakeoffOilTemperature?: number;

  @ApiProperty()
  powerTakeoffSpeed?: number;

  @ApiProperty()
  powerTakeoffSetSpeed?: number;

  @ApiProperty()
  ptoEnableSwitch?: string;

  @ApiProperty()
  remotePtoPreprogrammedSpeedControlSwitch?: string;

  @ApiProperty()
  remotePtoVariableSpeedControlSwitch?: string;

  @ApiProperty()
  ptoSetSwitch?: string;

  @ApiProperty()
  ptoCoastSwitch?: string;

  @ApiProperty()
  ptoResumeSwitch?: string;

  @ApiProperty()
  ptoAccelerateSwitch?: string;

  @ApiProperty()
  barometricPressure?: number;

  @ApiProperty()
  cabInteriorTemperature?: number;

  @ApiProperty()
  ambientAirTemperature?: number;

  @ApiProperty()
  airInletTemperature?: number;

  @ApiProperty()
  roadSurfaceTemperature?: number;

  @ApiProperty()
  particulateTrapInletPressure?: number;

  @ApiProperty()
  boostPressure?: number;

  @ApiProperty()
  intakeManifoldTemperature?: number;

  @ApiProperty()
  airInletPressure?: number;

  @ApiProperty()
  airFilter1DiffPressure?: number;

  @ApiProperty()
  coolantFilter1DiffPressure?: number;

  @ApiProperty()
  exhaustGasTemperature?: number;
}
