import { Component, OnInit } from '@angular/core';
//Importar clase DestinoViaje desde la carpeta models
import { DestinoViaje } from './../models/destino-viaje.models';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
//Para la lista se crea un array(vector, lista de elementos)
 destinos: DestinoViaje[];

  constructor() { 
    this.destinos = [];
  }

  ngOnInit(): void {
  }
//metodo que guarda los datos desde el formulario por medio de variables de plantilla "#" 
  guardar(nombre:string, url:string):boolean {
    this.destinos.push(new DestinoViaje(nombre, url))
    //console.log(this.destinos); para probar la entrada de datos al array
    return false;


  }

}
