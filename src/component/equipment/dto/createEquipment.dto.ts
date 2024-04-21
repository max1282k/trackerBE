import { ApiProperty } from '@nestjs/swagger';

export class CreateEquipmentDTO {
  @ApiProperty()
  imei: string;

  @ApiProperty()
  manufacturer: string;

  @ApiProperty()
  machineName: string;

  @ApiProperty()
  client: string;

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
  smartDevice: boolean;

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
  user?: string;
}
