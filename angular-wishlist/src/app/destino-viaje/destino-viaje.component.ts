import { Component, OnInit, Input } from '@angular/core';
//Se importa "Input" (nuevo decorador) para recibir parametros externos

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
  //una variable con especificacion de tipo de valor, pasar a constructor
  @Input() nombre: string; 
  //nombre es susceptible de ser pasado como parametro con el decorador '@Input'

  constructor() { 
    //this.nombre = 'nombre por defecto';
    //inicializa variable, esta es llamada en el html con {{ }}
  }

  ngOnInit(): void{
  }

}
