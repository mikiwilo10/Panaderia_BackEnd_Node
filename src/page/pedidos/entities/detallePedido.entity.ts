import {
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
    Entity,
    Column,
    ManyToOne,
    BeforeInsert,
    JoinColumn,
} from 'typeorm';
import { Pedido } from './pedido.entity';
import { CajasPanes } from 'src/page/cajas-panes/entities/cajas-pane.entity';


@Entity({ name: 'detalle' })
export class DetallePedido {

    @PrimaryGeneratedColumn('uuid')
    detalle_id: number;

    @Column('simple-array')
    detalle_direccion?: string[];

    @Column({ type: 'int' })
    detalle_cantidad: number;

    @Column('float', {
        default: 0
    })
    detalle_subTotal: number;

    @ManyToOne(
        () => CajasPanes,
        (caja) => caja.cajas_pedido,
        { onDelete: 'CASCADE' }
    )
    @JoinColumn({ name: 'detalle_caja_id' })
    detalle_caja: CajasPanes;

    @ManyToOne(
        () => Pedido,
        (pedido) => pedido.pedido_detalle,
        { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'detalle_pedido_id' })
    detalle_pedido: Pedido;

    @BeforeInsert()
    checkFieldsBeforeInsert() {
        this.detalle_subTotal = this.detalle_cantidad * this.detalle_caja.caja_precio
    }
}