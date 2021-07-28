import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public showLoginForm: boolean = false;

  public isLoggedIn: boolean = false;

  toggleLoginForm(): void {
    this.showLoginForm = !this.showLoginForm;
  }

  constructor() { }

  login(email: string, password: string) : boolean {
    console.log(password);
    console.log(password==="");
    const isGood: boolean = (email==="a@a.com" && password==="");

    this.isLoggedIn = isGood;
    return isGood;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}

