import { Injectable } from '@angular/core';
import { Perro } from '../models/perro.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  public perro: Perro;
  public perros: Perro[];

  constructor(public httpc: HttpClient) {
    this.perro = new Perro();
    this.perros = [];
  }

  getPerros() {
    return this.httpc.get(environment.api);
  }

  postPerro(perro: Perro) {
    this.perros.push(perro);
    return this.httpc.post<Perro>(environment.api, perro);
  }

}
