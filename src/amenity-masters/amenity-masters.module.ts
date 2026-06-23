import { Module } from '@nestjs/common';
import { AmenityMastersService } from './amenity-masters.service';
import { AmenityMastersController } from './amenity-masters.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AmenityMastersController],
  providers: [AmenityMastersService],
})
export class AmenityMastersModule {}
