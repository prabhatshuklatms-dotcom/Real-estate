import { Controller, Get, Post, Put, Body, Param, ParseIntPipe } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { SaveLayoutDto } from './dto/save-layout.dto';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Get('project/:id')
  findByProject(@Param('id', ParseIntPipe) id: number) {
    return this.locationsService.findByProject(id);
  }

  @Post()
  create(@Body() body: CreateLocationDto) {
    return this.locationsService.create(body);
  }

  /**
   * Upsert layout (geoFeatures + overlays) for a project.
   * Creates the Location row automatically if it doesn't exist.
   * Safe to call even before latitude/longitude are set via map.
   * MUST be declared before PUT :id to avoid ParseIntPipe swallowing "project".
   */
  @Put('project/:id/layout')
  saveLayout(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: SaveLayoutDto,
  ) {
    return this.locationsService.upsertLayout(id, body);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CreateLocationDto,
  ) {
    return this.locationsService.update(id, body);
  }
}