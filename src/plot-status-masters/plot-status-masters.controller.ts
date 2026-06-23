import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlotStatusMastersService } from './plot-status-masters.service';
import { CreatePlotStatusMasterDto } from './dto/create-plot-status-master.dto';
import { UpdatePlotStatusMasterDto } from './dto/update-plot-status-master.dto';

@Controller('plot-status-masters')
export class PlotStatusMastersController {
  constructor(private readonly plotStatusMastersService: PlotStatusMastersService) {}

  @Post()
  create(@Body() createPlotStatusMasterDto: CreatePlotStatusMasterDto) {
    return this.plotStatusMastersService.create(createPlotStatusMasterDto);
  }

  @Get()
  findAll() {
    return this.plotStatusMastersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.plotStatusMastersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlotStatusMasterDto: UpdatePlotStatusMasterDto) {
    return this.plotStatusMastersService.update(+id, updatePlotStatusMasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.plotStatusMastersService.remove(+id);
  }
}
