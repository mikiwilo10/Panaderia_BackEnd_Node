import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "../entities/user.entity";
import { JwtPayload } from "../interfaces/payload.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        // configService: ConfigService
    ) {

        super({
            secretOrKey: 'Panaderia_Eiteck',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        });
    }


  
    async validate( payload: JwtPayload ): Promise<User> {
        
        const { user_id } = payload;

        const user = await this.userRepository.findOneBy({user_id});

        if ( !user ) 
            throw new UnauthorizedException('Token not valid')
            
        if ( !user.isActive ) 
            throw new UnauthorizedException('User is inactive, talk with an admin');
        

        return user;
    }
}