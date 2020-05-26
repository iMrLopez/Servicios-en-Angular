import { Component, OnInit, Input } from '@angular/core';
import { Perro } from 'src/app/models/perro.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  public sexos = ['Macho', 'Hembra'];
  @Input() public perro;
  constructor() { }

  ngOnInit() { }

  openInput() {
    document.getElementById('fotoInput').click();
  }

  fotoSeleccionada($event) {
    if ($event.target.files) {
      const lector = new FileReader();
      lector.onload = () => {
        this.perro.fotografia = lector.result;
      };
      lector.readAsDataURL($event.target.files[0]); // convert to base64 string
    }
  }

}
