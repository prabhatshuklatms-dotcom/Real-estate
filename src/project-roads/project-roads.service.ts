import { Injectable } from '@nestjs/common';
import { CreateProjectRoadDto } from './dto/create-project-road.dto';
import { UpdateProjectRoadDto } from './dto/update-project-road.dto';

@Injectable()
export class ProjectRoadsService {
  create(createProjectRoadDto: CreateProjectRoadDto) {
    return 'This action adds a new projectRoad';
  }

  findAll() {
    return `This action returns all projectRoads`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectRoad`;
  }

  update(id: number, updateProjectRoadDto: UpdateProjectRoadDto) {
    return `This action updates a #${id} projectRoad`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectRoad`;
  }
}
