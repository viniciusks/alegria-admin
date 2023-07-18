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

  setIdentity(uid: any) {
    this.getUser(uid).subscribe({
      next: (response: any) => {
        let info = {
          uid,
          name: response.body.data.name,
          email: response.body.data.email,
          roles: response.body.data.roles,
        };
        localStorage.setItem('identity', JSON.stringify(info));
      },
      error: () => {
        localStorage.clear();
      },
    });
  }

  isAllowed(): boolean {
    let identity = this.getIdentity();

    return identity.roles.includes('ALEGRIA_ADMIN');
  }
}
