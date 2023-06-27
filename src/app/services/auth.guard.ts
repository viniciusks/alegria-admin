import { inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from './user.service';

export const authGuard = (next: ActivatedRouteSnapshot) => {
  let params: any = next.params;
  console.log(params.id);
  return true;
};
