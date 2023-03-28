import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'alegria-admin';

  public items: MenuItem[];

  constructor() {
    this.items = [];
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Usuários',
        icon: 'pi pi-pw pi-user',
        routerLink: '/user',
      },
      {
        label: 'Player',
        icon: 'pi pi-fw pi-volume-up',
        routerLink: '/player',
      },
      {
        label: 'Tela inicial',
        icon: 'pi pi-fw pi-home',
        routerLink: '/',
      },
    ];
  }
}
