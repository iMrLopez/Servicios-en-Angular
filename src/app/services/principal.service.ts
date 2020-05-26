import { Injectable } from '@angular/core';
import { Perro } from '../models/perro.model';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  public perro: Perro;
  constructor() {
    this.perro = new Perro();
  }
}
