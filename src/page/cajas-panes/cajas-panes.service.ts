import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';

import { CreateCajasPaneDto } from './dto/create-cajas-pane.dto';
import { UpdateCajasPaneDto } from './dto/update-cajas-pane.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CajasPanes } from './entities/cajas-pane.entity';
import { Repository } from 'typeorm';
import { Imagenes } from './entities/imagenes.entity';


@Injectable()
export class CajasPanesService {

  private readonly logger = new Logger('CajasPanesService');

  constructor(

    @InjectRepository(CajasPanes)
    private readonly cajasRepository: Repository<CajasPanes>,


    @InjectRepository(Imagenes)
    private readonly imagenRepository: Repository<Imagenes>,

  ) { }

  async create(createCajasPaneDto: CreateCajasPaneDto) {

    try {
      const { caja_imagen = [], ...cajasDetalles } = createCajasPaneDto;

      const cajas = this.cajasRepository.create(
        {
          ...cajasDetalles,
          cajas_imagen: caja_imagen.map(img => this.imagenRepository.create({ imagen_url: img }))
        });
      await this.cajasRepository.save(cajas);

      return { ...cajas, caja_imagen };

    } catch (error) {
      this.logger.error(error)
      throw new InternalServerErrorException('Unexpected error, check server logs');
    }
  }

  findAll() {
    return this.cajasRepository.find({
      relations: {
        cajas_imagen: true,
      }
    });
  }

  async findOne(caja_id: string) {
    const caja = await this.cajasRepository.findOne(
      {
        where: {
          caja_id: caja_id,
        },
        relations: {
          cajas_imagen: true,
        }
      });


    if (!caja)
      throw new NotFoundException(`Caja Panes with ${caja} not found`);

    return caja;
  }

  async findNombre(caja_nombre: string) {
    const queryBuilder = this.cajasRepository.createQueryBuilder('caja');

    const caja = await queryBuilder
      .where('caja.caja_nombre Like :caja_nombre', {
        caja_nombre: `%${caja_nombre}%`
      })
      .leftJoinAndSelect('caja.cajas_imagen', 'cajas_imagen')
      .getMany();

    return caja;
  }

}
