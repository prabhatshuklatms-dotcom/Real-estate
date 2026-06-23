import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PlotStatusMastersService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.plotStatusMaster.create({ data });
  }

  findAll() {
    return this.prisma.plotStatusMaster.findMany();
  }

  findOne(id: number) {
    return this.prisma.plotStatusMaster.findUnique({ where: { id } });
  }

  update(id: number, data: any) {
    return this.prisma.plotStatusMaster.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.plotStatusMaster.delete({ where: { id } });
  }
}
