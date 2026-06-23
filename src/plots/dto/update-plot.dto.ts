import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdatePlotDto {
  @IsString()
  @IsOptional()
  status?: string;

  @IsNumber()
  @IsOptional()
  price?: number;

  @IsNumber()
  @IsOptional()
  areaSqft?: number;

  @IsString()
  @IsOptional()
  svgElementId?: string;
}