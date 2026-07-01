import { IsNumber, IsOptional, IsObject, IsArray } from 'class-validator';

export class SaveLayoutDto {
  @IsNumber()
  @IsOptional()
  latitude?: number;

  @IsNumber()
  @IsOptional()
  longitude?: number;

  @IsObject()
  @IsOptional()
  geoFeatures?: Record<string, any>; // GeoJSON FeatureCollection

  @IsArray()
  @IsOptional()
  overlays?: any[];
}
