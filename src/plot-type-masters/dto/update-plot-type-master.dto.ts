import { PartialType } from '@nestjs/mapped-types';
import { CreatePlotTypeMasterDto } from './create-plot-type-master.dto';

export class UpdatePlotTypeMasterDto extends PartialType(CreatePlotTypeMasterDto) {}
