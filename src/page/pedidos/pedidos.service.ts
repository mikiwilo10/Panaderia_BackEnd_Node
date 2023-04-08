import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido.entity';
import { DetallePedido } from './entities/detallePedido.entity';
import { Repository } from 'typeorm';
import { CreateDetalleDto } from './dto/create-detalle.dto';

@Injectable()
export class PedidosService {

  private readonly logger = new Logger('PedidosService');

  constructor(

    @InjectRepository(Pedido)
    private readonly pedidoRepository: Repository<Pedido>,


    @InjectRepository(DetallePedido)
    private readonly detalleRepository: Repository<DetallePedido>,

  ) { }

  async create(createPedidoDto: CreatePedidoDto) {


    try {
      const { pedido_detalle = [], ...PedidoDet } = createPedidoDto;

      const orden = this.pedidoRepository.create(
        {
          ...PedidoDet,
          pedido_detalle: pedido_detalle.map(det => this.detalleRepository.create({
            detalle_cantidad: det.detalle_cantidad,
            detalle_caja: det.detalle_caja,
          }
          ))
        });
      let b = 0;
      createPedidoDto.pedido_detalle.forEach(valor => {
        const a = valor.detalle_caja.caja_precio * valor.detalle_cantidad;
        b = b + a;
      });
      orden.pedido_total=b;

      await this.pedidoRepository.save(orden);

      return { ...orden, pedido_detalle };

    } catch (error) {
      this.logger.error(error)
      throw new InternalServerErrorException('Unexpected error, check server logs');
    }

  }

  findAll() {
    return this.pedidoRepository.find({
      relations: {
        pedido_detalle: true,
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} pedido`;
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return `This action updates a #${id} pedido`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedido`;
  }
}
