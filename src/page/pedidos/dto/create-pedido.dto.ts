import { IsArray, IsIn, IsInt, IsNotEmpty, IsNumber, IsOptional, 
    IsPositive, IsString, MinLength 
} from 'class-validator';
import { DetallePedido } from '../entities/detallePedido.entity';
import { FormaPago } from 'src/enum/FormaPago';
import { CreateDetalleDto } from './create-detalle.dto';

export class CreatePedidoDto {

    @IsString()
    @MinLength(1)
    pedido_tipo_pago:FormaPago


    @IsString()
    @MinLength(1)
    pedido_cliente:string

    // @IsNumber()
    // @IsPositive()
    // pedido_total: number;
    @IsString({each:true})
    @IsArray()
    @IsOptional()
    pedido_direccion?:string[];


    // @IsString({each:true})
    @IsArray()
    @IsNotEmpty()
    pedido_detalle:DetallePedido[];
}
