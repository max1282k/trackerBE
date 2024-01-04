import { ApiProperty } from '@nestjs/swagger';

export class DeleteDeviceDTO {
  @ApiProperty()
  id: string;

}
