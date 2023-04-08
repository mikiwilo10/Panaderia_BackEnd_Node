import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, UseGuards,SetMetadata } from '@nestjs/common';
import { CajasPanesService } from './cajas-panes.service';
import { CreateCajasPaneDto } from './dto/create-cajas-pane.dto';
import { ApiKeyGuard } from 'src/auth/guards/api-key.guard';
import { AuthGuard } from '@nestjs/passport';
import { Rol } from 'src/enum/Rol.Enum';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CajasPanes } from './entities/cajas-pane.entity';

@ApiTags('Producto')
@Controller('cajas')
@ApiBearerAuth('JWT-auth')
export class CajasPanesController {
  constructor(private readonly cajasPanesService: CajasPanesService) { }

  @Post()
  @ApiResponse({ status: 201, description: 'Producto Creado', type: CajasPanes  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @SetMetadata('user_roles',[Rol.ADMIN])
  @UseGuards(AuthGuard(),ApiKeyGuard)
  create(@Body() createCajasPaneDto: CreateCajasPaneDto) {
    return this.cajasPanesService.create(createCajasPaneDto);
  }

  @Get()
  findAll() {
    return this.cajasPanesService.findAll();
  }

  @Get(':uuid')
  findOne(@Param('uuid', ParseUUIDPipe) uuid: string) {
    return this.cajasPanesService.findOne(uuid);
  }

  @Get('busqueda/:caja_nombre')
  findNombre(@Param('caja_nombre') caja_nombre: string) {
    return this.cajasPanesService.findNombre(caja_nombre);
  }

}
