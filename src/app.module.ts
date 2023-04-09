import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './page/user/user.module';
import { PedidosModule } from './page/pedidos/pedidos.module';
import { CajasPanesModule } from './page/cajas-panes/cajas-panes.module';
import { JwtStrategy } from './page/user/estrategias/jwt.strategy';
import { EnviosModule } from './page/envios/envios.module';
import { ConfigModule } from '@nestjs/config';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      // port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      ssl:{ rejectUnauthorized: false },
      autoLoadEntities:true,
      synchronize: true,
    }),
    UserModule,
    PedidosModule,
    CajasPanesModule,
    EnviosModule,
    SeedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {} 
