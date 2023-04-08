import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, SetMetadata } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.deto';
import { AuthGuard } from '@nestjs/passport';
import { ApiKeyGuard } from 'src/auth/guards/api-key.guard';
import { Rol } from 'src/enum/Rol.Enum';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('registro')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('login')
  loginUser(@Body() loginDto: LoginDto) {
    return this.userService.login(loginDto);
  }


  @Get('private')
  @SetMetadata('user_roles',[Rol.ADMIN,Rol.CLIENTE])
  @UseGuards(AuthGuard(),ApiKeyGuard)
  findAll() {
    return `privada papa`;
  }

}
