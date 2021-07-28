import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgModel } from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  favouriteColorControl = new FormControl('');

  public emailaa: string;
  password?: string;

  constructor() { this.emailaa = "gds";
  }

  ngOnInit(): void {
  }

  cancel(): void {

  }

}
