import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreatePlotDto {
  @IsString()
  @IsNotEmpty()
  plotNumber: string;       // "A-12"

  @IsNumber()
  @IsNotEmpty()
  projectId: number;        // which project this plot belongs to

  @IsString()
  @IsOptional()
  status?: string;          // dynamic from PlotStatusMaster

  @IsNumber()
  @IsOptional()
  areaSqft?: number;        // optional area in sqft

  @IsNumber()
  @IsOptional()
  price?: number;           // optional price in rupees

  @IsString()
  @IsNotEmpty()
  svgElementId: string;     // matches SVG shape ID on the map
}