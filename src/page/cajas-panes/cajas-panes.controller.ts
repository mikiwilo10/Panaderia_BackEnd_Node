import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { CajasPanesService } from './cajas-panes.service';
import { CreateCajasPaneDto } from './dto/create-cajas-pane.dto';
import { UpdateCajasPaneDto } from './dto/update-cajas-pane.dto';
import { ApiKeyGuard } from 'src/auth/guards/api-key.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('cajas')
export class CajasPanesController {
  constructor(private readonly cajasPanesService: CajasPanesService) { }

  @Post()
  create(@Body() createCajasPaneDto: CreateCajasPaneDto) {
    return this.cajasPanesService.create(createCajasPaneDto);
  }

  @Get()
  findAll() {
    return this.cajasPanesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.cajasPanesService.findOne(id);
  }

  @Get('busqueda/:caja_nombre')
  findNombre(@Param('caja_nombre') caja_nombre: string) {
    return this.cajasPanesService.findNombre(caja_nombre);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCajasPaneDto: UpdateCajasPaneDto) {
    return this.cajasPanesService.update(+id, updateCajasPaneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cajasPanesService.remove(+id);
  }
}
