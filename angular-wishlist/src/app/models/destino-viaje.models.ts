//Clase Destino, hace parte de los modelos de la app, pero en la logica del negocio
//Objeto
export class DestinoViaje {
    nombre: string;
    imagenUrl: string;

    constructor(n:string, u:string){
        this.nombre = n;
        this.imagenUrl = u;
    }
}