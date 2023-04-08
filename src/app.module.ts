import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './page/user/user.module';
import { PedidosModule } from './page/pedidos/pedidos.module';
import { CajasPanesModule } from './page/cajas-panes/cajas-panes.module';
import { JwtStrategy } from './page/user/estrategias/jwt.strategy';
import { EnviosModule } from './page/envios/envios.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'liceo',
      password: 'Cuenca2023@.',
      database: 'panaderia',
      // entities: ["src/**/**.entity{.ts,.js}"],
      autoLoadEntities:true,
      synchronize: true,
    }),
    UserModule,
    PedidosModule,
    CajasPanesModule,
    EnviosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 
