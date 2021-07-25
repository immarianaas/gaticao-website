import { Injectable } from '@angular/core';
import data from './bd.json';
import {Animal} from "./animal";
@Injectable({
  providedIn: 'root'
})
export class AnimaisService {
  animais: Animal[];

  constructor() {
    this.animais = data.animais;
  }

  getAnimals(): Animal[] {
    return this.animais;
  }


}
