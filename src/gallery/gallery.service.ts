import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGalleryDto } from './dto/create-gallery.dto';

@Injectable()
export class GalleryService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.gallery.findMany();
  }

  findByProject(projectId: number) {
    return this.prisma.gallery.findMany({
      where: { projectId },
    });
  }

  create(filename: string, data: CreateGalleryDto) {
    return this.prisma.gallery.create({
      data: {
        imageUrl: `/uploads/${filename}`,
        caption: data.caption,
        projectId: data.projectId,
      },
    });
  }

  remove(id: number) {
    return this.prisma.gallery.delete({
      where: { id },
    });
  }
}