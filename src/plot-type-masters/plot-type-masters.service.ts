import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PlotTypeMastersService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.plotTypeMaster.create({ data });
  }

  findAll() {
    return this.prisma.plotTypeMaster.findMany();
  }

  findOne(id: number) {
    return this.prisma.plotTypeMaster.findUnique({ where: { id } });
  }

  update(id: number, data: any) {
    return this.prisma.plotTypeMaster.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.plotTypeMaster.delete({ where: { id } });
  }
}
