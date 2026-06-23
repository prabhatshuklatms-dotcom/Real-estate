import { Controller, Get, Post, Put, Body, Param, ParseIntPipe } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';

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

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CreateLocationDto,
  ) {
    return this.locationsService.update(id, body);
  }
}