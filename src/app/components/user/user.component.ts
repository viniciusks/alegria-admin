import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  apiUrl: any;

  constructor() {
    this.apiUrl = environment.apiUrl;
  }

}
