import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pedido } from '../pedidos/entities/pedido.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EnviosService {

    constructor(
        @InjectRepository(Pedido)
        private readonly pedidoRepository: Repository<Pedido>,
    ) { }


    async findPedidoEstado(pedido_estado: string) {
        return this.pedidoRepository.find({
            relations: {
              pedido_detalle: true,
            }
          });
    }
}
