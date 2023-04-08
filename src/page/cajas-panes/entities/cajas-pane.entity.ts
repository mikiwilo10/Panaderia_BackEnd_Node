import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { Imagenes } from "./imagenes.entity";
import { Exclude } from "class-transformer";
import { DetallePedido } from "src/page/pedidos/entities/detallePedido.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name:'caja'})
export class CajasPanes {

    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    caja_id:string

    @ApiProperty()
    @Column({
        unique: true
    })
    caja_nombre:string

    @ApiProperty()
    @Column('int', {
        default: 0
    })
    caja_cantidad:number

    @ApiProperty()
    @Column('float',{
        default: 0
    })
    caja_precio: number;

    @ApiProperty()
    @Column('varchar',{nullable:true})
    caja_descripcion?:string

    @ApiProperty()
    @OneToMany(
        () => Imagenes,
        (imagen) => imagen.imagen_caja,
        {cascade:true}
    )
    cajas_imagen?:Imagenes[];

    @Exclude()
    @OneToMany(
        () => Imagenes,
        (imagen) => imagen.imagen_caja,
        {cascade:true}
    )
    cajas_pedido?:DetallePedido[];

    // {cascade:true,eager:true}
}
