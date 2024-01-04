import { ApiProperty } from '@nestjs/swagger';

export class CreateOrganizationDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  usersCount: string;
}
