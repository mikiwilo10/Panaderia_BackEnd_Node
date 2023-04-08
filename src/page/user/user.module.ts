import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './estrategias/jwt.strategy';

@Module({
  controllers: [UserController],
  providers: [UserService,JwtStrategy],
  exports:[
    TypeOrmModule,
    PassportModule,
    JwtModule,
    JwtStrategy],

  imports: [
    // ConfigModule,
    // ConfigModule.forRoot(),

    TypeOrmModule.forFeature([User]),
    PassportModule.register(
      { defaultStrategy: 'jwt' }
    ),
    JwtModule.register(
      {
        secret: 'Panaderia_Eiteck',
        signOptions: {
          expiresIn: '24h'
        }
      },

    )
  ]
})
export class UserModule { }
