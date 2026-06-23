import {
  Controller, Get, Post, Delete,
  Param, Body, ParseIntPipe,
  UseInterceptors, UploadedFile
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { GalleryService } from './gallery.service';
import { CreateGalleryDto } from './dto/create-gallery.dto';

@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Get()
  findAll() {
    return this.galleryService.findAll();
  }

  @Get('project/:id')
  findByProject(@Param('id', ParseIntPipe) id: number) {
    return this.galleryService.findByProject(id);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name);
      },
    }),
  }))
  upload(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: CreateGalleryDto,
  ) {
    return this.galleryService.create(file.filename, body);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.galleryService.remove(id);
  }
}