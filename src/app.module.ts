import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { PlotsModule } from './plots/plots.module';
import { PrismaModule } from './prisma/prisma.module';
import { GalleryModule } from './gallery/gallery.module';
import { InquiriesModule } from './inquiries/inquiries.module';
import { LocationsModule } from './locations/locations.module';
import { PlotStatusMastersModule } from './plot-status-masters/plot-status-masters.module';
import { PlotTypeMastersModule } from './plot-type-masters/plot-type-masters.module';
import { RoadMastersModule } from './road-masters/road-masters.module';
import { AmenityMastersModule } from './amenity-masters/amenity-masters.module';
import { ProjectRoadsModule } from './project-roads/project-roads.module';
import { ProjectAmenitiesModule } from './project-amenities/project-amenities.module';

@Module({
  imports: [UsersModule, ProjectsModule, PlotsModule, PrismaModule, GalleryModule, InquiriesModule, LocationsModule, PlotStatusMastersModule, PlotTypeMastersModule, RoadMastersModule, AmenityMastersModule, ProjectRoadsModule, ProjectAmenitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
