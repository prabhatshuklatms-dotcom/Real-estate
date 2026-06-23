import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AmenityMastersService } from './amenity-masters.service';
import { CreateAmenityMasterDto } from './dto/create-amenity-master.dto';
import { UpdateAmenityMasterDto } from './dto/update-amenity-master.dto';

@Controller('amenity-masters')
export class AmenityMastersController {
  constructor(private readonly amenityMastersService: AmenityMastersService) {}

  @Post()
  create(@Body() createAmenityMasterDto: CreateAmenityMasterDto) {
    return this.amenityMastersService.create(createAmenityMasterDto);
  }

  @Get()
  findAll() {
    return this.amenityMastersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.amenityMastersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAmenityMasterDto: UpdateAmenityMasterDto) {
    return this.amenityMastersService.update(+id, updateAmenityMasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.amenityMastersService.remove(+id);
  }
}
