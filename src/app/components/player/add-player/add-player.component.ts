import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { Album } from 'src/app/models/album';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css'],
  providers: [AlbumService, MessageService],
})
export class AddPlayerComponent implements OnInit {
  album: Album;

  constructor(
    private _albumService: AlbumService,
    private _messageService: MessageService
  ) {
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

  onSubmit() {
    console.log(this.album);
    if (
      this.album.name == '' ||
      this.album.owner == '' ||
      this.album.link == ''
    ) {
      this._messageService.clear();
      this._messageService.add({
        severity: 'error',
        summary: 'Campos obrigatórios',
        detail: 'Verifique os campos nome, autor e link de acesso aos arquivos',
      });
    } else if (this.album.musics.length === 0) {
      this._messageService.clear();
      this._messageService.add({
        severity: 'error',
        summary: 'Campos obrigatórios',
        detail: 'Adicione ao menos 1 música',
      });
    } else {
      this._albumService.insertAlbum(this.album).subscribe((response) => {
        console.log(response);
      });
    }
  }
}
