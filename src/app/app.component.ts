import { Component } from '@angular/core';
import { Egreso } from './egreso/egreso.model';
import { EgresoService } from './egreso/egreso.service';
import { Ingreso } from './ingreso/ingreso.model';
import { IngresoService } from './ingreso/ingreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Traer las clases de Ingreso y Egreso al componente principal
  ingresos:Ingreso[] = [];
  egresos: Egreso[] = [];

  /* Inicializar la aplicación principal con los valores que contengan
    los servicios de ingreso y egreso */
  constructor(ingresosServicio:IngresoService, egresoServicio:EgresoService){
    this.ingresos = ingresosServicio.ingresos;
    this.egresos = egresoServicio.egresos;
  }
  
  sumaArreglo(arreglo) {
    let valorTotal = 0;
    arreglo.forEach(elemento => {
      valorTotal += elemento.valor
    });
    return valorTotal;
  }

  // Métodos para manejar la información de los servicios
  getIngresoTotal(){
    return this.sumaArreglo(this.ingresos);
  }

  getEgresoTotal() {
    return this.sumaArreglo(this.egresos);
  }

  getPorcentajeTotal(){ 
    return this.getEgresoTotal() / this.getIngresoTotal(); 
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
  
}
