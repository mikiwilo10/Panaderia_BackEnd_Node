import { Controller, Get, Param, SetMetadata, UseGuards } from '@nestjs/common';
import { EnviosService } from './envios.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Rol } from 'src/enum/Rol.Enum';
import { AuthGuard } from '@nestjs/passport';
import { ApiKeyGuard } from 'src/auth/guards/api-key.guard';
import { EstadoPedido } from 'src/enum/EstadoPedido';

@ApiTags('envios')
@Controller('envios')
@ApiBearerAuth('JWT-auth')
export class EnviosController {
  constructor(private readonly enviosService: EnviosService) {}


  @Get()
  @SetMetadata('user_roles',[Rol.DELIVERY])
  @UseGuards(AuthGuard(),ApiKeyGuard)
  findNombre() {
    return this.enviosService.findPedidoEstado(EstadoPedido.PEDIDO);
  }
}
