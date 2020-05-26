import { Component, OnInit, Input } from '@angular/core';
import { PrincipalService } from 'src/app/services/principal.service';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.scss']
})
export class VisorComponent implements OnInit {

  constructor(public svc: PrincipalService) { }

  ngOnInit() {
  }

}
