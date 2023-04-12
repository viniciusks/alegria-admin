import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Album } from 'src/app/models/album';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-list-player',
  templateUrl: './list-player.component.html',
  styleUrls: ['./list-player.component.css'],
  providers: [AlbumService],
})
export class ListPlayerComponent implements OnInit {
  albums: Album[] = [];

  constructor(
    private _spinner: NgxSpinnerService,
    private _albumService: AlbumService
  ) {}

  ngOnInit() {
    // Comentário teste
    console.log('[OK] ListPlayerComponent');
    this._spinner.show();
    this.getAlbums();
  }

  getAlbums() {
    this._albumService.getAlbums().subscribe(
      (albums: any) => {
        this._spinner.hide();
        this.albums = albums.data;
      },
      (error) => {
        this._spinner.hide();
        console.log(`[ERROR] ${error}`);
      }
    );
  }
}
