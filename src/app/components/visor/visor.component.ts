import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.scss']
})
export class VisorComponent implements OnInit {

  @Input() public perro;
  constructor() { }

  ngOnInit() {
  }

}
