import {
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
    Entity,
    Column,
    ManyToOne,
    BeforeInsert,
} from 'typeorm';
import { Pedido } from './pedido.entity';
import { CajasPanes } from 'src/page/cajas-panes/entities/cajas-pane.entity';


@Entity({name:'detalle'})
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
        (caja) => caja.cajas_pedido,
        {  onDelete: 'CASCADE' }
    )
    detalle_caja: CajasPanes;

    @ManyToOne(
        () => Pedido,
        (pedido) => pedido.pedido_detalle,
        {  onDelete: 'CASCADE' })
    detalle_pedido: Pedido;

    @BeforeInsert()
    checkFieldsBeforeInsert() {
       this.detalle_subTotal=this.detalle_cantidad * this.detalle_caja.caja_precio
    }
}