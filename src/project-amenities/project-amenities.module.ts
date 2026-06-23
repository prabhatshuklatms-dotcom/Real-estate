import { Module } from '@nestjs/common';
import { ProjectAmenitiesService } from './project-amenities.service';
import { ProjectAmenitiesController } from './project-amenities.controller';

@Module({
  controllers: [ProjectAmenitiesController],
  providers: [ProjectAmenitiesService],
})
export class ProjectAmenitiesModule {}
