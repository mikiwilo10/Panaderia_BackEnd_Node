import {
    IsArray, IsIn, IsInt, IsNotEmpty, IsNumber, IsObject, IsOptional,
    IsPositive, IsString, MinLength
} from 'class-validator';
import { DetallePedido } from '../entities/detallePedido.entity';
import { FormaPago } from 'src/enum/FormaPago';
import { CreateDetalleDto } from './create-detalle.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class CreatePedidoDto {

    @ApiProperty({
        example: [FormaPago.EFECTIVO, FormaPago.TARJETA],
    })
    @IsString()
    @MinLength(1)
    pedido_tipo_pago?: FormaPago


    @ApiProperty()
    @IsString()
    @MinLength(1)
    pedido_cliente: string


    @ApiProperty()
    @IsString()
    @MinLength(1)
    @IsOptional()
    pedido_cliente_telefono: string


    @ApiProperty({type:CreateDetalleDto,isArray: true,})
    @IsNotEmpty()
    @IsArray()
    pedido_detalle: CreateDetalleDto[];
}
