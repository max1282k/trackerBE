import { ApiProperty } from '@nestjs/swagger';

export class AdminRegistrationDTO {
 
  @ApiProperty()
  admin_name: string;

  @ApiProperty()
  admin_email: string;

  @ApiProperty()
  role: string;

  @ApiProperty()
  organization: string;

  @ApiProperty()
  password:string;
}