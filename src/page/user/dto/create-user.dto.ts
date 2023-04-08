import { ApiProperty } from '@nestjs/swagger';
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

  @ApiProperty()
  @IsString()
  @IsEmail()
  user_email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  user_password: string;

  @ApiProperty()
  @IsNotEmpty()
  user_roles: Rol[];

  @ApiProperty()
  @IsNotEmpty()
  user_nombre: string;


}

