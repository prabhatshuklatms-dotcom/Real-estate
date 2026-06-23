import { Injectable } from '@nestjs/common';
import { CreateProjectAmenityDto } from './dto/create-project-amenity.dto';
import { UpdateProjectAmenityDto } from './dto/update-project-amenity.dto';

@Injectable()
export class ProjectAmenitiesService {
  create(createProjectAmenityDto: CreateProjectAmenityDto) {
    return 'This action adds a new projectAmenity';
  }

  findAll() {
    return `This action returns all projectAmenities`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectAmenity`;
  }

  update(id: number, updateProjectAmenityDto: UpdateProjectAmenityDto) {
    return `This action updates a #${id} projectAmenity`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectAmenity`;
  }
}
