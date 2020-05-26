import { Component, OnInit, Input } from '@angular/core';
import { PrincipalService } from 'src/app/services/principal.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  public sexos = ['Macho', 'Hembra'];
  constructor(public svc: PrincipalService) { }

  ngOnInit() { }

  openInput() {
    document.getElementById('fotoInput').click();
  }

  fotoSeleccionada($event) {
    if ($event.target.files) {
      const lector = new FileReader();
      lector.onload = () => {
        this.svc.perro.fotografia = lector.result;
      };
      lector.readAsDataURL($event.target.files[0]); // convert to base64 string
    }
  }

}
