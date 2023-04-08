import { IsArray, IsIn, IsInt, IsNotEmpty, IsNumber, IsOptional, 
    IsPositive, IsString, MinLength 
} from 'class-validator';
import { DetallePedido } from '../entities/detallePedido.entity';
import { FormaPago } from 'src/enum/FormaPago';

export class CreateDetalleDto {

    // @IsNumber()
    // @IsPositive()
    // detalle_total: number;

    @IsString({each:true})
    @IsArray()
    @IsOptional()
    detalle_direccion?:string[];

    
    @IsInt()
    @IsPositive()
    detalle_cantidad: number;

    @IsNumber()
    @IsPositive()
    detalle_subTotal: number;

    @IsPositive()
    @IsNotEmpty()
    detalle_caja: number;

    @IsPositive()
    @IsNotEmpty()
    detalle_pedido: number;

}
