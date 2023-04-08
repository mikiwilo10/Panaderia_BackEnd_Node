import {
    IsString,
    IsNotEmpty,
    IsEmail,
    Length,
    IsPositive,
    IsOptional,
    MinLength,
  } from 'class-validator';

export class LoginDto {

    @IsString()
    @IsEmail()
    user_email: string;
  
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    user_password: string;

}

