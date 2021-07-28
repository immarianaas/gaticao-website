import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public emailaa: string;
  password?: string;

  constructor() { this.emailaa = "gds";
  }

  ngOnInit(): void {
  }

  cancel(): void {

  }

}
