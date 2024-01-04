import { ApiProperty } from '@nestjs/swagger';

export class AdminFiltrationDTO {

  @ApiProperty()
  organization: string;
  
}