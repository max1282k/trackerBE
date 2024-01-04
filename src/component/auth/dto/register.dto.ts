import { ApiProperty } from '@nestjs/swagger';

export class RegisterDTO {
  @ApiProperty()
  address: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  userStatus: number;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  countryCode: string;

  @ApiProperty()
  treeLevel: number;

  @ApiProperty()
  totalTokenSold:number;

  @ApiProperty()
  placementSide: string

  @ApiProperty()
  signature: string;
}