import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoadMastersService } from './road-masters.service';
import { CreateRoadMasterDto } from './dto/create-road-master.dto';
import { UpdateRoadMasterDto } from './dto/update-road-master.dto';

@Controller('road-masters')
export class RoadMastersController {
  constructor(private readonly roadMastersService: RoadMastersService) {}

  @Post()
  create(@Body() createRoadMasterDto: CreateRoadMasterDto) {
    return this.roadMastersService.create(createRoadMasterDto);
  }

  @Get()
  findAll() {
    return this.roadMastersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roadMastersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoadMasterDto: UpdateRoadMasterDto) {
    return this.roadMastersService.update(+id, updateRoadMasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roadMastersService.remove(+id);
  }
}
