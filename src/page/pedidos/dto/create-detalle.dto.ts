import { IsArray, IsIn, IsInt, IsNotEmpty, IsNumber, IsOptional, 
    IsPositive, IsString, IsUUID, MinLength 
} from 'class-validator';
import { DetallePedido } from '../entities/detallePedido.entity';
import { FormaPago } from 'src/enum/FormaPago';
import { CreateCajasPaneDto } from 'src/page/cajas-panes/dto/create-cajas-pane.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';


@Exclude()
export class ProductoDto {

    @Expose()
    @ApiProperty()
    @IsUUID()
    caja_id:string

    @Expose()
    @ApiProperty()
    @IsNumber()
    @IsPositive()
    caja_precio: number;

}

export class CreateDetalleDto {


    @ApiProperty()
    @IsInt()
    @IsPositive()
    detalle_cantidad: number;

    @ApiProperty()
    @IsString({each:true})
    @IsArray()
    @IsOptional()
    detalle_direccion?:string[];

    @ApiProperty()
    @IsPositive()
    @IsNotEmpty()
    detalle_caja: ProductoDto;

}

