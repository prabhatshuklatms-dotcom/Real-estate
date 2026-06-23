import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { PlotsService } from './plots.service';
import { CreatePlotDto } from './dto/create-plot.dto';
import { UpdatePlotDto } from './dto/update-plot.dto';

@Controller('plots')
export class PlotsController {
  constructor(private readonly plotsService: PlotsService) {}

  @Post()
  create(@Body() body: CreatePlotDto) {
    return this.plotsService.create(body);
  }

  @Get()
  findAll() {
    return this.plotsService.findAll();
  }

  @Get('project/:projectId')
  findByProject(@Param('projectId', ParseIntPipe) projectId: number) {
    return this.plotsService.findByProject(projectId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.plotsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdatePlotDto) {
    return this.plotsService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.plotsService.remove(id);
  }
}