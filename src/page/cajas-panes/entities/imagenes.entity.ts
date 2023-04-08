import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
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
    imagen_caja:CajasPanes
}