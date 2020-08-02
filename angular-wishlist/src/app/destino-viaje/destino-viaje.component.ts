import { Component, OnInit, Input, Output, HostBinding, EventEmitter } from '@angular/core';

import { DestinoViaje } from './../models/destino-viaje.models';
//Se importa "Input" (nuevo decorador) para recibir parametros externos

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
  //una variable con especificacion de tipo de valor, pasar a constructor, variable de entrada el componente
  @Input() destinos: DestinoViaje; //antes "nombre: string;"
  //nombre es susceptible de ser pasado como parametro con el decorador '@Input'

  //nueva directiva para corregir espacio en el html, conexion directa con el atributo
  @HostBinding('attr.class') cssClass = 'col-md-4'; 
  //objeto generico pero es bueno colocarle el tipo <DestinoViaje>
  //Variable de salida desde componente
  @Output() clicked: EventEmitter<DestinoViaje>;

  constructor() { 
    //se inicializa objeto clicked
    this.clicked = new EventEmitter();

  }

  ngOnInit(): void{
  }

//PASO TRES: emitir eventos al padre
  ir() {
  //el atributo es clicked, emitira el evento emit
    this.clicked.emit(this.destinos);
  //para que no se genere ninguna accion en el html siempre colocar
    return false;
  }

}
