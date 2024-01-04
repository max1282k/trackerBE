import { ApiProperty } from '@nestjs/swagger';

export class CreateDeviceDTO {
  @ApiProperty()
  deviceType: {
    name: string;
    maxSupportedCANParams: number;
  };

  @ApiProperty()
  equipmentType: {
    name: string;
    configurations: {
      CAN_ID: string;
      PARAMETER_ID: string;
    }[];
  };

  @ApiProperty()
  organizationId: string;

  @ApiProperty()
  users: {
    id: string;
  }[];

  @ApiProperty()
  status: {
    parameter1: string;
    parameter2: string;
  };
}
