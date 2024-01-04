import { ApiProperty } from '@nestjs/swagger';

export class DeleteAdminDTO {
  @ApiProperty()
  email: string;
}
