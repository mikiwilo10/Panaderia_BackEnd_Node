import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards,SetMetadata } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Rol } from 'src/enum/Rol.Enum';
import { AuthGuard } from '@nestjs/passport';
import { ApiKeyGuard } from 'src/auth/guards/api-key.guard';

@Controller('pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Post()
  @SetMetadata('user_roles',[Rol.CLIENTE])
  @UseGuards(AuthGuard(),ApiKeyGuard)
  create(@Body() createPedidoDto: CreatePedidoDto) {
    return this.pedidosService.create(createPedidoDto);
  }

  @Get()
  @SetMetadata('user_roles',[Rol.ADMIN])
  @UseGuards(AuthGuard(),ApiKeyGuard)
  findAll() {
    return this.pedidosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pedidosService.findOne(+id);
  }
}
