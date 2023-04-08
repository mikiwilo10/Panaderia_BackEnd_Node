import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { Imagenes } from "./imagenes.entity";
import { Exclude } from "class-transformer";
import { DetallePedido } from "src/page/pedidos/entities/detallePedido.entity";

@Entity({name:'caja'})
export class CajasPanes {

    @PrimaryGeneratedColumn('uuid')
    caja_id:string

    @Column({
        unique: true
    })
    caja_nombre:string

    @Column('int', {
        default: 0
    })
    caja_cantidad:number

    @Column('float',{
        default: 0
    })
    caja_precio: number;

    @Column('varchar',{nullable:true})
    caja_descripcion?:string

    @OneToMany(
        () => Imagenes,
        (imagen) => imagen.imagen_caja,
        {cascade:true}
    )
    cajas_imagen?:Imagenes[];

    // @Exclude()
    @OneToMany(
        () => Imagenes,
        (imagen) => imagen.imagen_caja,
        {cascade:true}
    )
    cajas_pedido?:DetallePedido[];

    // {cascade:true,eager:true}
}
