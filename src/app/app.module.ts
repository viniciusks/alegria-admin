import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// PrimeNG
import { AccordionModule } from 'primeng/accordion';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

// Libs
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { PlayerComponent } from './components/player/player.component';
import { AddPlayerComponent } from './components/player/add-player/add-player.component';
import { ListPlayerComponent } from './components/player/list-player/list-player.component';
import { EditPlayerComponent } from './components/player/edit-player/edit-player.component';
import { AuthGuard } from './services/auth.guard';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    PlayerComponent,
    AddPlayerComponent,
    ListPlayerComponent,
    EditPlayerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    AccordionModule,
    InputTextModule,
    FormsModule,
    NgxSpinnerModule,
    MenuModule,
    PanelMenuModule,
    HttpClientModule,
    MessagesModule,
    ConfirmDialogModule,
  ],
  providers: [AuthGuard, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
