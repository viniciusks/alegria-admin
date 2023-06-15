import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  ConfirmEventType,
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-list-player',
  templateUrl: './list-player.component.html',
  styleUrls: ['./list-player.component.css'],
  providers: [AlbumService, ConfirmationService, MessageService],
})
export class ListPlayerComponent implements OnInit {
  albums: any[] = [];

  constructor(
    private _spinner: NgxSpinnerService,
    private _albumService: AlbumService,
    private _confirmationService: ConfirmationService,
    private _messageService: MessageService,
    private _router: Router
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

  goToEditAlbum(id: string) {
    this._router.navigate([`/player/edit-player/${id}`]);
  }

  confirmDelete(id: string) {
    this._confirmationService.confirm({
      message: 'Tem certeza que deseja excluir esse álbum?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this._albumService.deleteAlbum(id).subscribe((response) => {
          let status = response.status;
          if (status == 200) {
            this._messageService.clear();
            this._messageService.add({
              severity: 'info',
              summary: 'Deletado',
              detail: 'Você aceitou deletar este álbum.',
            });
            setTimeout(() => {
              location.reload();
            }, 2000);
          }
        });
        this._messageService.clear();
        this._messageService.add({
          severity: 'info',
          summary: 'Deletado',
          detail: 'Você aceitou deletar este álbum.',
        });
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this._messageService.clear();
            this._messageService.add({
              severity: 'error',
              summary: 'Rejeitado',
              detail: 'Você não aceitou deletar este álbum.',
            });
            break;
          case ConfirmEventType.CANCEL:
            this._messageService.clear();
            this._messageService.add({
              severity: 'warn',
              summary: 'Cancelado',
              detail: 'Você desistiu de deletar este álbum.',
            });
            break;
        }
      },
    });
  }
}
