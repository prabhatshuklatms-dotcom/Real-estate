import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  slug: string;

  @IsNumber()
  @IsNotEmpty()
  builderId: number;        // ← must be here

  @IsString()
  @IsOptional()
  location?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  layoutSvgUrl?: string;
}