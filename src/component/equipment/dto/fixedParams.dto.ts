import { ApiProperty } from '@nestjs/swagger';

export class FixedParamsDTO {
  @ApiProperty()
  manufacturer: string;

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
