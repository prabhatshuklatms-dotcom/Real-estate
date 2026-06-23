import { IsString, IsNotEmpty } from 'class-validator';

export class CreateAmenityMasterDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
