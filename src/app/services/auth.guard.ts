import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _userService: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let identity = this._userService.getIdentity();
    let params: any = route.queryParams;

    if (!identity) {
      this._userService.setIdentity(params.uid);
    }

    return this._userService.isAllowed();
  }
}
