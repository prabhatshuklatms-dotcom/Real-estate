import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RoadMastersService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.roadMaster.create({ data });
  }

  findAll() {
    return this.prisma.roadMaster.findMany();
  }

  findOne(id: number) {
    return this.prisma.roadMaster.findUnique({ where: { id } });
  }

  update(id: number, data: any) {
    return this.prisma.roadMaster.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.roadMaster.delete({ where: { id } });
  }
}
