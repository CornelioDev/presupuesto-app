import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egreso/egreso.model';
import { EgresoService } from '../egreso/egreso.service';
import { Ingreso } from './ingreso.model';
import { IngresoService } from './ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  
  ingresos:Ingreso[] = [];
  egresos: Egreso[] = [];
  constructor(private ingresosServicio:IngresoService, private egresoServicio:EgresoService) { }

  ngOnInit(): void {
    this.ingresos = this.ingresosServicio.ingresos;
    this.egresos = this.egresoServicio.egresos;
  }

}
