import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { CajasPanes } from "./cajas-pane.entity";

@Entity({name:'imagen'})
export class Imagenes {

    @PrimaryGeneratedColumn('uuid')
    imagen_id:string

    @Column('varchar')
    imagen_url:string


    @ManyToOne(
        () => CajasPanes,
        ( cajas ) => cajas.cajas_imagen,
        {  onDelete: 'CASCADE' }
    )
    @JoinColumn({name:'imagen_caja_id'})
    imagen_caja:CajasPanes
}