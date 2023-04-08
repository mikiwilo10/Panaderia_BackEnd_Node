import {
    IsString,
    IsNotEmpty,
    IsEmail,
    Length,
    IsPositive,
    IsOptional,
    MinLength,
  } from 'class-validator';
import { Rol } from 'src/enum/Rol.Enum';
import { isArray } from 'util';

export class CreateUserDto {

    @IsString()
    @IsEmail()
    user_email: string;
  
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    user_password: string;
  
    // @IsArray()
    @IsNotEmpty()
    user_roles:Rol[];

    @IsNotEmpty()
    user_nombre: string;
  
    @IsString()
    @IsOptional()
    user_direccion?: string;

    @IsString()
    @IsOptional()
    user_telefono?: string;

}

