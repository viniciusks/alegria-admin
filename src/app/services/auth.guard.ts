import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _userService: UserService, private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let identity = this._userService.getIdentity();
    let params: any = route.queryParams;

    if (!identity) {
      this._userService.setIdentity(params.uid);
    }

    if (this._userService.isAllowed()) {
      this._router.navigate(['/']);
      return true;
    } else {
      this._router.navigate(['/']);
      return false;
    }
  }
}
