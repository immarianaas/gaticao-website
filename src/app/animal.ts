export enum Size {
  GRANDE,
  MEDIO,
  PEQUENO
}

export enum Race {
  GATO = "gato",
  CAO = "cao"
}

export class Animal {
  id?: number;
  race?: string;
  imagePath?: string;
  size?: string
}
