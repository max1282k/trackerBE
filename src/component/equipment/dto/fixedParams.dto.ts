import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';

export class FixedParamsDTO {
  @ApiProperty()
  manufacturer: string;

  @ApiProperty()
  machineName: string;

  @ApiProperty()
  client: string;

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
  interval: string;

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
}
