import { Module } from '@nestjs/common';
import { PlotStatusMastersService } from './plot-status-masters.service';
import { PlotStatusMastersController } from './plot-status-masters.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PlotStatusMastersController],
  providers: [PlotStatusMastersService],
})
export class PlotStatusMastersModule {}
