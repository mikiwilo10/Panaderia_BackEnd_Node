import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { BadRequestException, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';

import * as bcrypt from "bcrypt";
import { LoginDto } from './dto/login.deto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/payload.interface';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    private jtwService:JwtService
    ) {

  }

  async create(createUserDto: CreateUserDto) {
    try {

      const { user_password, ...userDetalle } = createUserDto;
      const user = this.userRepository.create(
        {
          ...userDetalle,
          user_password: bcrypt.hashSync(user_password, 10)
        }
      )
      await this.userRepository.save(user)
      delete user.user_password;
      return {
        ...user,
        token: this.generateJWT({ rol: user.user_roles, email: user.user_email ,user_id:user.user_id})};
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }



  async login(loginDto: LoginDto) {
    try {

      const { user_password, user_email } = loginDto;

      const login = await this.userRepository.findOne(
        {
          where: { user_email },
          select: { user_email: true,user_roles:true, user_password: true ,user_id:true}
        }
      );

      if (!login) throw new UnauthorizedException("Credenciales Incorrectas");


      if (!bcrypt.compare(user_password, user_password)) throw new UnauthorizedException("Credenciales Incorrectas");
      
      return {
        ...login,
       token: this.generateJWT({ rol: login.user_roles, email: login.user_email,user_id:login.user_id })
      };
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  // generateJWT(user: User) {
  //   const payload: JwtPayload = { rol: user.user_roles, email: user.user_email };
  //   return {
  //     access_token: this.jtwService.sign(payload),
  //     user,
  //   };
  // }
  generateJWT(payload: JwtPayload ) {
    const token =  this.jtwService.sign(payload);
    return token; 
  }

}
