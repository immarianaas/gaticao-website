import { Component,  ViewChild, ElementRef } from '@angular/core';
import { LoginService } from "../login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(
    private loginService: LoginService
  ) { }

  @ViewChild('navBurger', { static: true }) navBurger!: ElementRef;
  @ViewChild('navMenu', { static: true }) navMenu!: ElementRef;

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn;
  }

  toggleLoginForm(): void {
    this.loginService.toggleLoginForm();
  }

  logout(): void {
    this.loginService.logout();
  }
}
