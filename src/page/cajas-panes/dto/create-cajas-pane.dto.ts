import { IsArray, IsIn, IsInt, IsNumber, IsOptional, 
    IsPositive, IsString, MinLength 
} from 'class-validator';

import { ApiProperty } from "@nestjs/swagger";


export class CreateCajasPaneDto {

    @ApiProperty({
        description: 'Producto nombre (unique)',
        nullable: false,
        minLength: 1
    })
    @IsString()
    @MinLength(1)
    caja_nombre:string

    @ApiProperty()
    @IsInt()
    @IsPositive()
    @IsOptional()
    caja_cantidad:number

    @ApiProperty()
    @IsNumber()
    @IsPositive()
    caja_precio: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    caja_descripcion?:string

    @ApiProperty()
    @IsString({each:true})
    @IsArray()
    @IsOptional()
    caja_imagen?:string[];

}
