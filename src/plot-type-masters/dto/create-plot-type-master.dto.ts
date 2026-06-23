import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePlotTypeMasterDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
