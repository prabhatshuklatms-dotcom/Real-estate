import { IsNumber, IsOptional, IsString, IsObject } from 'class-validator';

export class CreateLocationDto {
  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;

  @IsString()
  @IsOptional()
  address?: string;

  @IsObject()
  @IsOptional()
  geoFeatures?: Record<string, any>; // GeoJSON FeatureCollection

  @IsNumber()
  projectId: number;
}
