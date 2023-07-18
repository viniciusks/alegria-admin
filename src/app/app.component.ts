import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'alegria-admin';

  identity: any;
  public items: MenuItem[];

  constructor(private _router: Router, private _userService: UserService) {
    this.items = [];
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Tela inicial',
        icon: 'pi pi-fw pi-home',
        routerLink: `/`,
      },
      {
        label: 'Usuários',
        icon: 'pi pi-pw pi-user',
        routerLink: `/user`,
      },
      {
        label: 'Músicas',
        icon: 'pi pi-fw pi-play',
        items: [
          {
            label: 'Acervo - In build',
            icon: 'pi pi-fw pi-list',
            // TODO: Colocar routerLink
          },
          {
            label: 'Editor - In build',
            icon: 'pi pi-fw pi-file-edit',
            // TODO: Colocar routerLink
          },
        ],
      },
      {
        label: 'Player',
        icon: 'pi pi-fw pi-volume-up',
        routerLink: `/player`,
      },
    ];
  }
}
