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
        // const queryBuilder = this.pedidoRepository.createQueryBuilder('pedido');

        // const caja = await queryBuilder
        //     .where('pedido.pedido_estado =:pedido_estado', {
        //         pedido_estado: pedido_estado
        //     })
        //     .leftJoinAndSelect('pedido.pedido_detalle', 'pedido_detalle')
        //     .getMany();

        // return caja;
        return this.pedidoRepository.find({
            relations: {
              pedido_detalle: true,
            }
          });
    }
}
