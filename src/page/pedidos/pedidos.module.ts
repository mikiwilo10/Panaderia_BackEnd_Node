import { Module } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { PedidosController } from './pedidos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido.entity';
import { DetallePedido } from './entities/detallePedido.entity';

@Module({
  controllers: [PedidosController],
  providers: [PedidosService],
  imports:[
    TypeOrmModule.forFeature([Pedido,DetallePedido])
  ]
})
export class PedidosModule {}
