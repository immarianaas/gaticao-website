import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public showLoginForm: boolean = false

  toggleLoginForm(): void {
    this.showLoginForm = !this.showLoginForm;
  }

  constructor() { }
}
