import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateGalleryDto {
  @IsString()
  @IsOptional()
  caption?: string;

  @Type(() => Number)   // ← this converts string "1" to number 1
  @IsNumber()
  projectId: number;
}