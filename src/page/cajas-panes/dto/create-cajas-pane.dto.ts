import { IsArray, IsIn, IsInt, IsNumber, IsOptional, 
    IsPositive, IsString, MinLength 
} from 'class-validator';
export class CreateCajasPaneDto {

    @IsString()
    @MinLength(1)
    caja_nombre:string

    @IsInt()
    @IsPositive()
    caja_cantidad:number

    @IsNumber()
    @IsPositive()
    caja_precio: number;

    @IsString()
    @IsOptional()
    caja_descripcion?:string

    @IsString({each:true})
    @IsArray()
    @IsOptional()
    caja_imagen?:string[];

}
