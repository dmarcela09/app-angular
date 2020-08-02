//Clase Destino, hace parte de los modelos de la app, pero en la logica del negocio
//Objeto
export class DestinoViaje {
//    nombre: string;
//    imagenUrl: string;
// Bandera
    private selected: boolean; 

//PASO UNO: Tecnicas para comunicar componentes
//**Desencadenar eventos entre componentes hijos hacia padres

//Sintaxis sugar... Declarar en constructor variables publicas, de esta forma no es necesario declarar las variable externas al constructor ni dentro del mismo.

    constructor(public name: string, public u: string){
     //   this.nombre = n;
     //   this.imagenUrl = u;
    }

    isSelected(): boolean {
        return this.selected;
    }
 //encapsular acceso a dicha variable
    setSelected(s: boolean) {
        this.selected = s;
    }
}
//LINTER: Buenas practicas de programacion
