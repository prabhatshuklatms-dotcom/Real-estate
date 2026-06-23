import { PartialType } from '@nestjs/mapped-types';
import { CreateRoadMasterDto } from './create-road-master.dto';

export class UpdateRoadMasterDto extends PartialType(CreateRoadMasterDto) {}
