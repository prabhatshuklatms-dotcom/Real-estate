import { Module } from '@nestjs/common';
import { LocationsController } from './locations.controller';
import { LocationsService } from './locations.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],    // ← this is the fix
  controllers: [LocationsController],
  providers: [LocationsService],
})
export class LocationsModule {}