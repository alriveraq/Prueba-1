import { Component,Input, Output, EventEmitter} from '@angular/core';
import { seccion } from 'src/app/modelos/seccion';
import { alumno} from './../../modelos/alumno';
@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent{
  @Input()public Alumno: alumno = {
    rut: '',
    nombre: '',
    apellido: '',
    edad: 0,
    seccion: {
      id: 0,
      nombre_seccion: ''
    }


  }
  public listarseccion: Array<seccion> = [
    {
      id: 1,
      nombre_seccion: "007D"
    }
  ]
  public inrut(evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.Alumno.rut = elemento.value;
  }
  public innombre(evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.Alumno.nombre = elemento.value;
  }
  public inapellido(evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.Alumno.apellido = elemento.value;
  }
  public inedad(evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.Alumno.edad = Number.parseInt(elemento.value)
  }
  public inseccion(evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.Alumno.seccion = elemento.value as unknown as seccion;
  }
  @Output()public enviaralumno = new EventEmitter<alumno>()
  public guardarelemt2(){
    const copia: alumno ={
      ...this.Alumno
    }
    this.enviaralumno.emit(copia);
  }
}
