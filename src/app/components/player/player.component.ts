import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Album } from 'src/app/models/album';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  providers: [AlbumService],
})
export class PlayerComponent implements OnInit {
  albums: Album[] = [];

  constructor(
    private _spinner: NgxSpinnerService,
    private _albumService: AlbumService
  ) {}

  ngOnInit() {
    console.log('[OK] Alegria Cristã Admin - Player');
    this._spinner.show();
    this.getAlbums();
  }

  getAlbums() {
    this._albumService.getAlbums().subscribe((albums: Album[]) => {
      this._spinner.hide();
      this.albums = albums;
    });
  }
}
