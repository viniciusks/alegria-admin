import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {
  public apiFunction: string;
  public identity: any;

  constructor(private _http: HttpClient) {
    this.apiFunction = environment.apiFunction;
  }

  getUser(uid: any): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(`${this.apiFunction}/users/${uid}`, {
      headers: headers,
      observe: 'response',
    });
  }

  getIdentity() {
    return JSON.parse(localStorage.getItem('identity') as string);
  }

  isAllowed(uid: any) {
    this.getUser(uid).subscribe({
      next: (response: any) => {
        if (response.body.data.roles.includes('ALEGRIA_ADMIN')) {
          let info = {
            uid,
            name: response.body.data.name,
            email: response.body.data.email,
          };
          localStorage.setItem('identity', JSON.stringify(info));
        }
      },
      error: () => {
        localStorage.clear();
      },
    });
    return localStorage.getItem('identity') ? true : false;
  }
}
