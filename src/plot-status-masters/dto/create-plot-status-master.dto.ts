import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePlotStatusMasterDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  color?: string;
}
