import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {
  @Input() presupuestoTotal;
  @Input() ingresoTotal;
  @Input() egresoTotal;
  @Input() porcentajeTotal;


  constructor() { }

  ngOnInit() {
  }

}
