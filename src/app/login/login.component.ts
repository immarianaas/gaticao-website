import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  favouriteColorControl = new FormControl('');

  public emailaa: string;
  password?: string;

  constructor(

  ) { this.emailaa = "gds";
  }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event'])
  clickout() {

  }



  cancel(): void {
    console.log(this.emailaa);
  }

}
