import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/services/principal.service';
import { Perro } from 'src/app/models/perro.model';

@Component({
  selector: 'app-lista-de-perros',
  templateUrl: './lista-de-perros.component.html',
  styleUrls: ['./lista-de-perros.component.scss']
})
export class ListaDePerrosComponent implements OnInit {

  constructor(public principalSvc: PrincipalService) { }

  ngOnInit() {
    this.loadPerros();
  }

  selectPerro(perro: Perro) {
    this.principalSvc.perro = perro;
  }

  loadPerros(): void {
    this.principalSvc.getPerros().subscribe((perros) => {
      console.log(perros);
      // tslint:disable-next-line: no-string-literal
      this.principalSvc.perros = perros['perros'] as Perro[];
    });
  }

}
