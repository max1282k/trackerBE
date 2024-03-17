import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';

export class ImeiDTO {
  @ApiProperty()
  imei: string;
}
