import { PartialType } from '@nestjs/mapped-types';
import { CreateAmenityMasterDto } from './create-amenity-master.dto';

export class UpdateAmenityMasterDto extends PartialType(CreateAmenityMasterDto) {}
