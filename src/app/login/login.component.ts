import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoginService } from "../login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email!: string;
  password!: string;
  loginError: boolean;

  constructor(
    private loginService: LoginService
  ) {
    this.cleanFields();
    this.loginError = false;
  }

  ngOnInit(): void {
  }



  @HostListener('document:click', ['$event'])
  clickout() {
    if (this.loginService.showLoginForm) {
      this.loginService.showLoginForm = false;
    }
  }

  show(): boolean {
    return this.loginService.showLoginForm;
  }


  cancel(): void {
    //this.loginService.showLoginForm = false;
  }

  cleanFields(): void {
    this.email="";
    this.password="";
  }


  login(): void {
    const isGood: boolean = this.loginService.login(this.email, this.password);

    this.loginError = !isGood;
    if (isGood) {
      this.cleanFields();
      this.loginService.showLoginForm = false;
    }

  }

}
