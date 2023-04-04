import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css'],
})
export class AddPlayerComponent implements OnInit {
  album: Album;

  constructor() {
    this.album = {
      name: '',
      owner: '',
      musics: [],
      link: '',
    };
  }

  ngOnInit(): void {
    console.log('[OK] AddPlayerComponent');
  }

  addMusic() {
    this.album.musics.push({
      title: '',
      artist: '',
      cover: '',
      file: '',
    });
  }

  removeMusic(index: any) {
    this.album.musics.splice(index, 1);
  }
}
