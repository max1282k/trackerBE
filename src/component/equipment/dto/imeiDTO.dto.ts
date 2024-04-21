import { ApiProperty } from '@nestjs/swagger';

export class ImeiDTO {
  @ApiProperty()
  imei: string;
}
