import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/page/user/entities/user.entity';
import { UserService } from 'src/page/user/user.service';
import { DataCajas, initialDataUsers } from './user-data';
import { CajasPanesService } from 'src/page/cajas-panes/cajas-panes.service';

@Injectable()
export class SeedService {

  constructor(
    private readonly userService: UserService,
    private readonly cajaService: CajasPanesService,
    ) {

  }

  async execute() {
    const users =initialDataUsers
    const cajas =DataCajas

    const initialData =[]
    const initialData2 =[]
    

    users.forEach(usr => {
      initialData.push(this.userService.create(usr));
    })

    cajas.forEach(caja => {
      initialData2.push(this.cajaService.create(caja));
    })

    await Promise.all(initialData)
    await Promise.all(initialData2)
    return `This action returns all seed`;
  }

  private async insertarusuarios() {
    return `This action returns all seed`;
  }



}
