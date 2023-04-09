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

    @Column()
    user_nombre: string;

    @Column('boolean', {
        default: true
    })
    isActive: boolean;

    @Column({
        type: "set",
        enum: Rol,
        default: [],
    })
    user_roles: Rol[];

    @BeforeInsert()
    checkFieldsBeforeInsert() {
        this.user_email = this.user_email.toLowerCase().trim();
    }
}