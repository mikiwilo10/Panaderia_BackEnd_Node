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

export class LoginDto {

  @ApiProperty()
  @IsString()
  @IsEmail()
  user_email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  user_password: string;

}

