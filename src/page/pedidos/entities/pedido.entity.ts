import { Exclude } from "class-transformer";
import { FormaPago } from "src/enum/FormaPago";
import { BeforeInsert, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DetallePedido } from "./detallePedido.entity";
import { EstadoPedido } from "src/enum/EstadoPedido";

@Entity({name:'pedido'})
export class Pedido {
    @PrimaryGeneratedColumn('uuid')
    pedido_id: string;

    @CreateDateColumn()
    pedido_fecha: Date;

    
    @Column('varchar')
    pedido_tipo_pago: FormaPago;

    @Column('varchar',{default:EstadoPedido.PEDIDO})
    pedido_estado:string
   
    @Column('varchar')
    pedido_cliente:string

    @Column('varchar',{nullable:true,default:"0999999999"},
    )
    pedido_cliente_telefono?: string;

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
