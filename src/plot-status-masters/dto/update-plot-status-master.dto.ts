import { PartialType } from '@nestjs/mapped-types';
import { CreatePlotStatusMasterDto } from './create-plot-status-master.dto';

export class UpdatePlotStatusMasterDto extends PartialType(CreatePlotStatusMasterDto) {}
