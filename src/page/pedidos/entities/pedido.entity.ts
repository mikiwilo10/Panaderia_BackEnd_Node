import { Exclude } from "class-transformer";
import { FormaPago } from "src/enum/FormaPago";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DetallePedido } from "./detallePedido.entity";

@Entity()
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
    pedido_direccion: string[];

   
    @Column('varchar')
    pedido_cliente:string

    @Column('float',{
        default: 0
    })
    pedido_total: number;


    // @ManyToOne(() => Customer, (customer) => customer.orders)
    // customer: Customer;

    @Exclude()
    @OneToMany(
        () => DetallePedido, 
        (detalle) => detalle.detalle_pedido)
    pedido_detalle: DetallePedido[];

    // @Expose()
    // get products() {
    //     if (this.items) {
    //         return this.items
    //             .filter((item) => !!item)
    //             .map((item) => ({
    //                 ...item.product,
    //                 quantity: item.quantity,
    //                 itemId: item.id,
    //             }));
    //     }
    //     return [];
    // }

    // @Expose()
    // get total() {
    //     if (this.items) {
    //         return this.items
    //             .filter((item) => !!item)
    //             .reduce((total, item) => {
    //                 const totalItem = item.product.price * item.quantity;
    //                 return total + totalItem;
    //             }, 0);
    //     }
    //     return 0;
    // }
}
