import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {

  public imageUrl: string = "https://imgur.com/Je2RX16.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
