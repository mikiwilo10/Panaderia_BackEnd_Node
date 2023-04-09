import { Rol } from "src/enum/Rol.Enum";
import { CreateCajasPaneDto } from "src/page/cajas-panes/dto/create-cajas-pane.dto";
import { CreateUserDto } from "src/page/user/dto/create-user.dto";
import { User } from "src/page/user/entities/user.entity";

interface SeedData {
    usuarios: User[];
}
export const DataCajas: CreateCajasPaneDto[] = [

    {
        caja_nombre: "Pan de Dulce",
        caja_cantidad: 1,
        caja_precio: 2.98,
        caja_descripcion: "Pan de Dulce con coco",
        caja_imagen: [
            "https://www.comedera.com/wp-content/uploads/2022/02/pan-de-coco.jpg",
            "https://www.laylita.com/recetas/wp-content/uploads/2021/12/Pan-dulce-de-coco.jpg"
        ]
    }
    ,
    {
        caja_nombre: "Guaguas de Pan",
        caja_cantidad: 5,
        caja_precio: 4.99,
        caja_descripcion: "Guaguas de Pan",
        caja_imagen: [
            "https://recetas123.net/wp-content/uploads/guaguas-de-pan-1.jpg"
        ]
    }
]


export const initialDataUsers: CreateUserDto[] = [

    {
        user_email: "test1@test.com",
        user_password: "test1@",
        user_roles: [Rol.ADMIN],
        user_nombre: "Juan Sateros"
    }
    ,
    {
        user_email: "test2@test.com",
        user_password: "test2@",
        user_roles: [Rol.CLIENTE],
        user_nombre: "Rosa Calle"
    }
    ,
    {
        user_email: "test3@test.com",
        user_password: "test3@",
        user_roles: [Rol.DELIVERY],
        user_nombre: "Xavier Luu"
    }
]
