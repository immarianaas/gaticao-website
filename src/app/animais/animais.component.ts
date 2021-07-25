import { Component, OnInit } from '@angular/core';
import { Animal, Size, Race } from "../animal";
import { AnimaisService } from "../animais.service";

@Component({
  selector: 'app-animais',
  templateUrl: './animais.component.html',
  styleUrls: ['./animais.component.css']
})
export class AnimaisComponent implements OnInit {

  animals: Animal[];

  constructor(
    private animaisService: AnimaisService
  ) {
    /* this.animals = [
      { race: Race.GATO, imagePath: '/assets/animal-images/ex1.jpg' },
      { race: Race.GATO, imagePath: '/assets/animal-images/ex2.jpg' }
    ]
     */
    this.animals = animaisService.getAnimals()
  }

  ngOnInit(): void {
  }

}
