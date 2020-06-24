import { Component } from '@angular/core';
import { Perro } from './models/perro.model';
import { PrincipalService } from './services/principal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public svc: PrincipalService) {}
  title = 'angularServices';
}
