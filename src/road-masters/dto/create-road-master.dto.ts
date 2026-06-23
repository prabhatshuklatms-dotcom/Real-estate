import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateRoadMasterDto {
  @IsString()
  @IsNotEmpty()
  roadName: string;

  @IsString()
  @IsOptional()
  roadWidth?: string;

  @IsString()
  @IsOptional()
  roadType?: string;

  @IsString()
  @IsOptional()
  imageUrl?: string;
}
