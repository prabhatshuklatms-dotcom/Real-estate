import { Module } from '@nestjs/common';
import { RoadMastersService } from './road-masters.service';
import { RoadMastersController } from './road-masters.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RoadMastersController],
  providers: [RoadMastersService],
})
export class RoadMastersModule {}
