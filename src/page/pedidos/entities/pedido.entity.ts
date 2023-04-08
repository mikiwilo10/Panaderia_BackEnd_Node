import { Exclude } from "class-transformer";
import { FormaPago } from "src/enum/FormaPago";
import { BeforeInsert, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DetallePedido } from "./detallePedido.entity";

@Entity({name:'pedido'})
export class Pedido {
    @PrimaryGeneratedColumn('uuid')
    pedido_id: string;

    @CreateDateColumn()
    pedido_fecha: Date;

    
    @Column('varchar')
    pedido_tipo_pago: FormaPago;

   
    @Column({
        type: "varchar",
    })
    pedido_direccion?: string[];

   
    @Column('varchar')
    pedido_cliente:string

    @Column('float',{
        default: 0
    })
    pedido_total: number;



    @Exclude()
    @OneToMany(
        () => DetallePedido, 
        (detalle) => detalle.detalle_pedido,
        {cascade:true})
    pedido_detalle: DetallePedido[];

    
}
