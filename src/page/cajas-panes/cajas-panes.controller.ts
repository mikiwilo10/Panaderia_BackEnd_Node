import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, UseGuards,SetMetadata } from '@nestjs/common';
import { CajasPanesService } from './cajas-panes.service';
import { CreateCajasPaneDto } from './dto/create-cajas-pane.dto';
import { UpdateCajasPaneDto } from './dto/update-cajas-pane.dto';
import { ApiKeyGuard } from 'src/auth/guards/api-key.guard';
import { AuthGuard } from '@nestjs/passport';
import { Rol } from 'src/enum/Rol.Enum';

@Controller('cajas')
export class CajasPanesController {
  constructor(private readonly cajasPanesService: CajasPanesService) { }

  @Post()
  @SetMetadata('user_roles',[Rol.ADMIN])
  @UseGuards(AuthGuard(),ApiKeyGuard)
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

}
