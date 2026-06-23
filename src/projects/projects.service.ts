import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateProjectDto) {
    return this.prisma.project.create({
      data: {
        name: data.name,
        slug: data.slug,
        description: data.description,
        location: data.location,
        layoutSvgUrl: data.layoutSvgUrl,
        builderId: data.builderId,   // ← this is the fix, use builderId directly
      },
    });
  }

  findAll() {
    return this.prisma.project.findMany({
      include: { plots: true },
    });
  }

  findOne(slug: string) {
    return this.prisma.project.findUnique({
      where: { slug },
      include: { plots: true },
    });
  }

  update(id: number, data: UpdateProjectDto) {
    return this.prisma.project.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.project.delete({
      where: { id },
    });
  }
}