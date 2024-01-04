import { ApiProperty } from '@nestjs/swagger';

export class AdminLoginDTO {

  @ApiProperty()
  admin_email: string;

  @ApiProperty()
  password:string;
}