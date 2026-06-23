import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectAmenitiesService } from './project-amenities.service';
import { CreateProjectAmenityDto } from './dto/create-project-amenity.dto';
import { UpdateProjectAmenityDto } from './dto/update-project-amenity.dto';

@Controller('project-amenities')
export class ProjectAmenitiesController {
  constructor(private readonly projectAmenitiesService: ProjectAmenitiesService) {}

  @Post()
  create(@Body() createProjectAmenityDto: CreateProjectAmenityDto) {
    return this.projectAmenitiesService.create(createProjectAmenityDto);
  }

  @Get()
  findAll() {
    return this.projectAmenitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectAmenitiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectAmenityDto: UpdateProjectAmenityDto) {
    return this.projectAmenitiesService.update(+id, updateProjectAmenityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectAmenitiesService.remove(+id);
  }
}
