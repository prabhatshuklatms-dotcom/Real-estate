import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectAmenityDto } from './create-project-amenity.dto';

export class UpdateProjectAmenityDto extends PartialType(CreateProjectAmenityDto) {}
