import { ApiProperty } from '@nestjs/swagger';

export class CreateAdminDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  organization: string;

  @ApiProperty()
  otp: string;

  @ApiProperty()
  role: string;
}
