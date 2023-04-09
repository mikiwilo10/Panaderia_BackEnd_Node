import { Module } from '@nestjs/common';
import { CajasPanesService } from './cajas-panes.service';
import { CajasPanesController } from './cajas-panes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CajasPanes } from './entities/cajas-pane.entity';
import { Imagenes } from './entities/imagenes.entity';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [CajasPanesController],
  providers: [CajasPanesService],
  imports:[
    TypeOrmModule.forFeature([CajasPanes,Imagenes]),
    UserModule
  ],
  exports:[CajasPanesService]
})
export class CajasPanesModule {}
