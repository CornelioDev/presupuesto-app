import { Injectable } from '@angular/core';
import { Ingreso } from './ingreso.model';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {

  constructor() { }
  Ingreso: Ingreso[] = [
    new Ingreso('Venta coche', 1400),
    new Ingreso('Salrio', 2000)
  ]
}
