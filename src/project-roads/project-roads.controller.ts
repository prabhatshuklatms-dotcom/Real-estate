import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectRoadsService } from './project-roads.service';
import { CreateProjectRoadDto } from './dto/create-project-road.dto';
import { UpdateProjectRoadDto } from './dto/update-project-road.dto';

@Controller('project-roads')
export class ProjectRoadsController {
  constructor(private readonly projectRoadsService: ProjectRoadsService) {}

  @Post()
  create(@Body() createProjectRoadDto: CreateProjectRoadDto) {
    return this.projectRoadsService.create(createProjectRoadDto);
  }

  @Get()
  findAll() {
    return this.projectRoadsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectRoadsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectRoadDto: UpdateProjectRoadDto) {
    return this.projectRoadsService.update(+id, updateProjectRoadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectRoadsService.remove(+id);
  }
}
