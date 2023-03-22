import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoService } from './egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {
  
  @Input() ingresoTotal:number;

  egresos:Egreso[] = [];
  constructor(private egresosServicio:EgresoService) { }

  ngOnInit(): void {
    this.egresos = this.egresosServicio.egresos;
  }

  eliminarEgreso(egreso:Egreso){
    this.egresosServicio.eliminar(egreso);
  }

  calcularPorcentaje(egreso:Egreso){
    return egreso.valor / this.ingresoTotal;
  }

}
