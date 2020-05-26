import { Component, OnInit, Input } from '@angular/core';
import { PrincipalService } from 'src/app/services/principal.service';

@Component({
  selector: 'app-tiempo-actual',
  templateUrl: './tiempo-actual.component.html',
  styleUrls: ['./tiempo-actual.component.scss']
})
export class TiempoActualComponent implements OnInit {
  public currentDate = new Date();

  constructor(public svc: PrincipalService) { }

  ngOnInit() {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }

}
