import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddPlayerComponent } from './components/player/add-player/add-player.component';
import { ListPlayerComponent } from './components/player/list-player/list-player.component';
import { PlayerComponent } from './components/player/player.component';
import { UserComponent } from './components/user/user.component';
import { EditPlayerComponent } from './components/player/edit-player/edit-player.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'player',
    component: PlayerComponent,
    children: [
      {
        path: '',
        component: ListPlayerComponent,
      },
      {
        path: 'add-player',
        component: AddPlayerComponent,
      },
      {
        path: 'edit-player/:id',
        component: EditPlayerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
