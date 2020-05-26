import { Component, OnInit, Input } from '@angular/core';
import { Perro } from 'src/app/models/perro.model';

@Component({
  selector: 'app-tiempo-actual',
  templateUrl: './tiempo-actual.component.html',
  styleUrls: ['./tiempo-actual.component.scss']
})
export class TiempoActualComponent implements OnInit {
  public currentDate = new Date();
  @Input() perro: Perro;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }

}
