import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlotTypeMastersService } from './plot-type-masters.service';
import { CreatePlotTypeMasterDto } from './dto/create-plot-type-master.dto';
import { UpdatePlotTypeMasterDto } from './dto/update-plot-type-master.dto';

@Controller('plot-type-masters')
export class PlotTypeMastersController {
  constructor(private readonly plotTypeMastersService: PlotTypeMastersService) {}

  @Post()
  create(@Body() createPlotTypeMasterDto: CreatePlotTypeMasterDto) {
    return this.plotTypeMastersService.create(createPlotTypeMasterDto);
  }

  @Get()
  findAll() {
    return this.plotTypeMastersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.plotTypeMastersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlotTypeMasterDto: UpdatePlotTypeMasterDto) {
    return this.plotTypeMastersService.update(+id, updatePlotTypeMasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.plotTypeMastersService.remove(+id);
  }
}
