import { Module } from '@nestjs/common';
import { PlotsController } from './plots.controller';
import { PlotsService } from './plots.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PlotsController],
  providers: [PlotsService],
})
export class PlotsModule {}