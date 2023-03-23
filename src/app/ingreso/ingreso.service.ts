import { Injectable } from '@angular/core';
import { Ingreso } from './ingreso.model';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {

  constructor() { }
  ingresos: Ingreso[] = [
    new Ingreso('Venta coche', 1400),
    new Ingreso('Salrio', 2000)
  ]

  eliminar(ingreso:Ingreso){
    const indice:number = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(indice, 1);
  }
  
  agregar(descripcion, valor){
    this.ingresos.push(new Ingreso(descripcion, valor))
  }
}
