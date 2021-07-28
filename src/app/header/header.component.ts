import { Component,  ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public showLoginForm: boolean = false

  constructor() { }

  @ViewChild('navBurger', { static: true }) navBurger!: ElementRef;
  @ViewChild('navMenu', { static: true }) navMenu!: ElementRef;

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

  toggleLoginForm(): void {
    this.showLoginForm = !this.showLoginForm;
  }

}
