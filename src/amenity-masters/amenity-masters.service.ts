import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AmenityMastersService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.amenityMaster.create({ data });
  }

  findAll() {
    return this.prisma.amenityMaster.findMany();
  }

  findOne(id: number) {
    return this.prisma.amenityMaster.findUnique({ where: { id } });
  }

  update(id: number, data: any) {
    return this.prisma.amenityMaster.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.amenityMaster.delete({ where: { id } });
  }
}
