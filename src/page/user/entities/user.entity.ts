import { Rol } from 'src/enum/Rol.Enum';
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
    
    @PrimaryGeneratedColumn('uuid')
    user_id: string;

    @Column({
        unique: true
    })
    user_email: string;

    @Column({
        select: false
    })
    user_password: string;

    @Column('varchar')
    user_nombre: string;

    @Column('varchar',{nullable:true})
    user_direccion?: string;

    @Column('varchar',{nullable:true})
    user_telefono?: string;

    @Column('boolean', {
        default: true
    })
    isActive: boolean;

    // @Column('varchar',
    // {array: true,})
    // user_roles: string[];
    @Column({
        type: "set",
        enum: Rol,
        default: [],
    })
    user_roles: Rol[];

    @BeforeInsert()
    checkFieldsBeforeInsert() {
        this.user_email = this.user_email.toLowerCase().trim();
        // this.user_roles = this.user_roles.toLowerCase().trim();
    }
}