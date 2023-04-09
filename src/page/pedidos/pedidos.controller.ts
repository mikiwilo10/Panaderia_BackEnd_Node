import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards,SetMetadata } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { Rol } from 'src/enum/Rol.Enum';
import { AuthGuard } from '@nestjs/passport';
import { ApiKeyGuard } from 'src/auth/guards/api-key.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Pedidos')
@Controller('pedidos')
@ApiBearerAuth('JWT-auth')
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
  

  @Get('uuid/:uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.pedidosService.findOne(uuid);
  }
}
