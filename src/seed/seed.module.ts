import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { UserModule } from 'src/page/user/user.module';
import { CajasPanesModule } from 'src/page/cajas-panes/cajas-panes.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports:[UserModule,CajasPanesModule]
})
export class SeedModule {}
