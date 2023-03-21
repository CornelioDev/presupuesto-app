import { Injectable } from '@angular/core';
import { Egreso } from './egreso.model';

@Injectable({
  providedIn: 'root'
})
export class EgresoService {

  constructor() { }
  Ingreso:Egreso[] = [
    new Egreso('Freidora de Aire', 800),
    new Egreso('Compra', 500)
  ]
}
