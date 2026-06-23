import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePlotDto } from './dto/create-plot.dto';
import { UpdatePlotDto } from './dto/update-plot.dto';

@Injectable()
export class PlotsService {
  constructor(private prisma: PrismaService) {}

  create(data: CreatePlotDto) {
    return this.prisma.plot.create({
      data: {
        plotNumber: data.plotNumber,
        projectId: data.projectId,
        status: data.status ?? 'Available',
        areaSqft: data.areaSqft,
        price: data.price,
        svgElementId: data.svgElementId,
      },
    });
  }

  findAll() {
    return this.prisma.plot.findMany();
  }

  findByProject(projectId: number) {
    return this.prisma.plot.findMany({
      where: { projectId },
    });
  }

  findOne(id: number) {
    return this.prisma.plot.findUnique({
      where: { id },
    });
  }

  update(id: number, data: UpdatePlotDto) {
    return this.prisma.plot.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.plot.delete({
      where: { id },
    });
  }
}