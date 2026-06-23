import { Module } from '@nestjs/common';
import { PlotTypeMastersService } from './plot-type-masters.service';
import { PlotTypeMastersController } from './plot-type-masters.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PlotTypeMastersController],
  providers: [PlotTypeMastersService],
})
export class PlotTypeMastersModule {}
