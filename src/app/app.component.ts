import { Component } from '@angular/core';
import { Perro } from './models/perro.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public perro: Perro = new Perro();
  title = 'angularServices';
}
