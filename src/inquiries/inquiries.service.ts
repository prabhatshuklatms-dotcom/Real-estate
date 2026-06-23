import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInquiryDto } from './dto/create-inquiry.dto';

@Injectable()
export class InquiriesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.inquiry.findMany({
      include: { project: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  create(data: CreateInquiryDto) {
    return this.prisma.inquiry.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
        projectId: data.projectId,
      },
    });
  }

  updateStatus(id: number, status: string) {
    return this.prisma.inquiry.update({
      where: { id },
      data: { status },
    });
  }

  remove(id: number) {
    return this.prisma.inquiry.delete({
      where: { id },
    });
  }
}