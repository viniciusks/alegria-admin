import { ActivatedRouteSnapshot } from '@angular/router';
import firebase from './firebase.service';

export const authGuard = (next: ActivatedRouteSnapshot) => {
  console.log(firebase.auth().currentUser);
  return true;
};
