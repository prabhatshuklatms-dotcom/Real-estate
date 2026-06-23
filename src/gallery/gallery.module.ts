import { Module } from '@nestjs/common';
import { GalleryController } from './gallery.controller';
import { GalleryService } from './gallery.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],    // ← this is the fix
  controllers: [GalleryController],
  providers: [GalleryService],
})
export class GalleryModule {}