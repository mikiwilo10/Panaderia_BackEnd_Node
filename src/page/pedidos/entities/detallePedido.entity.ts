import {
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
    Entity,
    Column,
    ManyToOne,
} from 'typeorm';
import { Pedido } from './pedido.entity';
import { CajasPanes } from 'src/page/cajas-panes/entities/cajas-pane.entity';


@Entity()
export class DetallePedido {

    @PrimaryGeneratedColumn('uuid')
    detalle_id: number;

    @Column({ type: 'int' })
    detalle_cantidad: number;

    @Column('float', {
        default: 0
    })
    detalle_subTotal: number;



    @ManyToOne(
        () => CajasPanes,
        (caja) => caja.cajas_pedido
    )
    detalle_caja: CajasPanes;

    @ManyToOne(
        () => Pedido,
        (pedido) => pedido.pedido_detalle)
    detalle_pedido: Pedido;
}