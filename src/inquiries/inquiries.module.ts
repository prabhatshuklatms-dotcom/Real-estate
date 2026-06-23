import { Module } from '@nestjs/common';
import { InquiriesController } from './inquiries.controller';
import { InquiriesService } from './inquiries.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],    // ← this is the fix
  controllers: [InquiriesController],
  providers: [InquiriesService],
})
export class InquiriesModule {}