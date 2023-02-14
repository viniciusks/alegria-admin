import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public validateForm: boolean;
  public errorFlag: boolean;

  constructor(private _router: Router, private _spinner: NgxSpinnerService) {
    this.validateForm = true;
    this.errorFlag = false;
  }

  onSubmit(form: any) {}
}
