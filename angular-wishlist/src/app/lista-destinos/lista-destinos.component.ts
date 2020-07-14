import { Component, OnInit } from '@angular/core';
//Importar clase DestinoViaje en la carpeta models
import { DestinoViaje } from './../models/destino-viaje.models';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
//Para la lista se crea un array(vector, lista de elementos)
 //destinos: string[]; primero
 destinos: DestinoViaje[];

  constructor() { 
    //se listan los valores del array
    //this.destinos = ['Barcelona', 'Buenos Aires', 'Lima', 'Cartagena']; primero
    this.destinos = [];
  }

  ngOnInit(): void {
  }
//metodo que guarda los datos desde el formulario por medio de variables de plantilla "#" 
  guardar(nombre:string, url:string):boolean {
    //console.log(nombre); primero
    //console.log(url); primero
    //console.log(new DestinoViaje(nombre, url)); segundo
    this.destinos.push(new DestinoViaje(nombre, url))
    //console.log(this.destinos); para probar la entrada de datos al array
    return false;


  }

}
