import { ApiProperty } from '@nestjs/swagger';

export class CreateLogDTO {
  @ApiProperty()
  imei: string;

  @ApiProperty()
  data: string;
}
