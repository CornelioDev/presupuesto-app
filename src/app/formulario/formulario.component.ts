import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egreso/egreso.model';
import { EgresoService } from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoService } from '../ingreso/ingreso.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  tipo: string = "tipoIngreso";
  inputDescripcion:string;
  inputValor:number;

  constructor(private ingresoServicio:IngresoService,
              private egresoServicio:EgresoService) { }

  ngOnInit(): void {
  }
  
  tipoOperacion(event){
    this.tipo = event.target.value;
  }

  agregarRegistro(){
    if (this.tipo === "tipoIngreso")
      this.ingresoServicio.agregar(this.inputDescripcion, this.inputValor);
    else
      this.egresoServicio.agregar(this.inputDescripcion, this.inputValor);
  }
}
