import { Injectable } from '@angular/core';
import { Perro } from '../models/perro.model';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  public perro: Perro;
  public perros: Perro[];

  constructor() {
    this.perro = new Perro();
    this.perros = [];
  }

  getPerros() {

  }

  postPerro(perro: Perro) {
    this.perros.push(perro);
  }

  putPerro() {

  }


}
