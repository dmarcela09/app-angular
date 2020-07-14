import { Component, OnInit, Input, HostBinding } from '@angular/core';

import { DestinoViaje } from './../models/destino-viaje.models';
//Se importa "Input" (nuevo decorador) para recibir parametros externos

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
  //una variable con especificacion de tipo de valor, pasar a constructor
  @Input() destinos: DestinoViaje; //antes "nombre: string;"
  //nombre es susceptible de ser pasado como parametro con el decorador '@Input'
  //nueva directiva para corregir espacio en el html, conexion directa con el atributo
  @HostBinding('attr.class') cssClass = 'col-md-4'; 

  constructor() { 
    //this.nombre = 'nombre por defecto';
    //inicializa variable, esta es llamada en el html con {{ }}
  }

  ngOnInit(): void{
  }

}
