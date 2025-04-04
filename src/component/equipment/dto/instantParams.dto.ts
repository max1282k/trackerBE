import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';

export class EditInstantParams {
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
}
