import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateAmenityMasterDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  imageUrl?: string;
}
