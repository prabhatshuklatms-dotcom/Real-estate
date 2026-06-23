import { Module } from '@nestjs/common';
import { ProjectRoadsService } from './project-roads.service';
import { ProjectRoadsController } from './project-roads.controller';

@Module({
  controllers: [ProjectRoadsController],
  providers: [ProjectRoadsService],
})
export class ProjectRoadsModule {}
