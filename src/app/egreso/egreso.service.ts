import { Injectable } from '@angular/core';
import { Egreso } from './egreso.model';

@Injectable({
  providedIn: 'root'
})
export class EgresoService {

  constructor() { }
  egresos:Egreso[] = [
    new Egreso('Freidora de Aire', 800),
    new Egreso('Compra', 500)
  ]
  
  eliminar(egreso: Egreso) {
    const indice: number = this.egresos.indexOf(egreso);
    this.egresos.splice(indice, 1);
  }

  agregar(descripcion, valor) {
    this.egresos.push(new Egreso(descripcion, valor))
  }
}
