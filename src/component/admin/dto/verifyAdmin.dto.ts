import { ApiProperty } from '@nestjs/swagger';

export class VerifyAdminDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  organization: string;

  @ApiProperty()
  otp: string;
}
