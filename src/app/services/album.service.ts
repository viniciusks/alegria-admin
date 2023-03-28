import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Album } from '../models/album';

@Injectable()
export class AlbumService {
  urlPlayer: string;

  constructor(private _http: HttpClient) {
    this.urlPlayer = environment.apiUrlPlayer;
  }

  getAlbums(): Observable<Album[]> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get<Album[]>(`${this.urlPlayer}/albums`, {
      headers: headers,
    });
  }
}
