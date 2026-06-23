import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectRoadDto } from './create-project-road.dto';

export class UpdateProjectRoadDto extends PartialType(CreateProjectRoadDto) {}
