import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egreso/egreso.model';
import { Ingreso } from './ingreso.model';
import { IngresoService } from './ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  
  ingresos:Ingreso[] = [];
  constructor(private ingresosServicio:IngresoService) { }

  ngOnInit(): void {
    this.ingresos = this.ingresosServicio.ingresos;
  }

  eliminarIngreso(ingreso:Ingreso){
    this.ingresosServicio.eliminar(ingreso);
  }

}
