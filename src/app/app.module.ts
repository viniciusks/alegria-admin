import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

// PrimeNG
import { AccordionModule } from 'primeng/accordion'; //accordion and accordion tab
import { MenuItem } from 'primeng/api'; //api
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    AccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
