import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLocationDto } from './dto/create-location.dto';

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
      },
    });
  }
}
