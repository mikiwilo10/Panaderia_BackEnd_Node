import { Module } from '@nestjs/common';
import { EnviosService } from './envios.service';
import { EnviosController } from './envios.controller';
import { UserModule } from '../user/user.module';
import { PedidosModule } from '../pedidos/pedidos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from '../pedidos/entities/pedido.entity';

@Module({
  controllers: [EnviosController],
  providers: [EnviosService],
  imports:[
    UserModule,
    PedidosModule,
    TypeOrmModule.forFeature([Pedido]),
  ]
})
export class EnviosModule {}
