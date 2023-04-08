import { BadRequestException, CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from "express";
import { Reflector } from '@nestjs/core';

@Injectable()
export class ApiKeyGuard implements CanActivate {

  constructor(
    private readonly reflector: Reflector
  ) { }


  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const validRoles: string[] = this.reflector.get('user_roles', context.getHandler())

    if (!validRoles) return true;
    if (validRoles.length === 0) return true;

    const req = context.switchToHttp().getRequest();
    const user = req.user.user_roles;
       if (!user)
      throw new BadRequestException('User not found');

    for (const role of user) {
      if (validRoles.includes(role)) {
        return true;
      }
    }

    throw new UnauthorizedException("No tiene Permisos")
  }
}
