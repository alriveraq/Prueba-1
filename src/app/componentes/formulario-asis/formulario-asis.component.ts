import { Component,Input, Output, EventEmitter} from '@angular/core';
import { historial } from './../../modelos/historial';
import {alumno} from './../../modelos/alumno'

@Component({
  selector: 'app-formulario-asis',
  templateUrl: './formulario-asis.component.html',
  styleUrls: ['./formulario-asis.component.scss']
})
export class FormularioAsisComponent{
  @Input()public Historial: historial = {
    fecha: '',
    alumno_asis: {
      rut: '',
      nombre: '',
      apellido: '',
      edad: 0,
      seccion: {
        id: 0,
        nombre_seccion: ''
      }
    }
  }
  @Input() public listaalum!: Array<alumno>

  public infecha(evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.Historial.fecha = elemento.value;
  }
  public inalumno(evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.Historial.alumno_asis = elemento.value as unknown as alumno;
  }

  @Output()public enviarasis = new EventEmitter<historial>()
  public guardarelemt3(){
    const copia: historial ={
      ...this.Historial
    }
    this.enviarasis.emit(copia);
  }
}
