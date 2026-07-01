import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { SaveLayoutDto } from './dto/save-layout.dto';

@Injectable()
export class LocationsService {
  constructor(private prisma: PrismaService) {}

  findByProject(projectId: number) {
    return this.prisma.location.findUnique({
      where: { projectId },
    });
  }

  create(data: CreateLocationDto) {
    return this.prisma.location.create({
      data: {
        latitude: data.latitude,
        longitude: data.longitude,
        address: data.address,
        geoFeatures: data.geoFeatures ?? undefined,
        overlays: data.overlays ?? [],
        projectId: data.projectId,
      },
    });
  }

  update(id: number, data: CreateLocationDto) {
    return this.prisma.location.update({
      where: { id },
      data: {
        latitude: data.latitude,
        longitude: data.longitude,
        address: data.address,
        ...(data.geoFeatures !== undefined && { geoFeatures: data.geoFeatures }),
        ...(data.overlays !== undefined && { overlays: data.overlays }),
      },
    });
  }

  /**
   * Upsert layout data (geoFeatures + overlays) for a project.
   * Creates the Location row if it doesn't exist yet.
   * Does NOT require latitude/longitude — defaults to 0,0 for new rows.
   */
  upsertLayout(projectId: number, data: SaveLayoutDto) {
    return this.prisma.location.upsert({
      where: { projectId },
      create: {
        projectId,
        latitude: data.latitude ?? 0,
        longitude: data.longitude ?? 0,
        geoFeatures: data.geoFeatures ?? undefined,
        overlays: data.overlays ?? [],
      },
      update: {
        ...(data.latitude !== undefined && { latitude: data.latitude }),
        ...(data.longitude !== undefined && { longitude: data.longitude }),
        ...(data.geoFeatures !== undefined && { geoFeatures: data.geoFeatures }),
        ...(data.overlays !== undefined && { overlays: data.overlays }),
      },
    });
  }
}
