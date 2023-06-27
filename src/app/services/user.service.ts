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

  isAllowed(uid: any) {
    let flag = false;
    this.getUser(uid).subscribe((response) => {
      console.log(response);
    });
    return flag;
  }
}
