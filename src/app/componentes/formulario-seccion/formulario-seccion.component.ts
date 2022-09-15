import { Component, Input, Output, EventEmitter} from '@angular/core';
import { seccion } from './../../modelos/seccion';

@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent{
  @Input()public Seccion : seccion = {
    id: 0,
    nombre_seccion: ''
  }
public inid(evento: Event): void{
  const elemento = evento.target as HTMLInputElement;
  this.Seccion.id = Number.parseInt(elemento.value) // esto es cuando es numero
}
public inseccion(evento: Event): void{
  const elemento = evento.target as HTMLInputElement;
  this.Seccion.nombre_seccion = elemento.value
}
@Output()public enviarseccion = new EventEmitter<seccion>()
public guardarelemnt(){
  const copia: seccion ={
    ...this.Seccion
  }
  this.enviarseccion.emit(copia);
}
}
