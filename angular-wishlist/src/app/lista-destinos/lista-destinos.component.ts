import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
//Para la lista se crea un array(vector, lista de elementos)
  destinos: string[];
  constructor() { 
    //se listan los valores del array
    this.destinos = ['Barcelona', 'Buenos Aires', 'Lima', 'Cartagena'];
  }

  ngOnInit(): void {
  }

}
