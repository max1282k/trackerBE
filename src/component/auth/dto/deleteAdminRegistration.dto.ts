import { ApiProperty } from '@nestjs/swagger';

export class DeleteAdminRegistrationDTO {
  @ApiProperty()
  email: string;

}
