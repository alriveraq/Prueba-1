import { Component } from '@angular/core';
import { alumno } from './modelos/alumno';
import { seccion } from './modelos/seccion';
import { historial } from './modelos/historial';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba1';

  public listarseccion: Array<seccion> = [
    {
      id: 1,
      nombre_seccion: '007D'
    },
    {
      id: 2,
      nombre_seccion: '008D'
    }

  ]
  public listaralumno: Array<alumno> = [
  ]
  public listarasis: Array<historial> = [
  ]
  public escucharasis(nuevaasis: historial):void{
    this.listarasis.push(nuevaasis);
  }
  public escucharseccion(nuevaseccion: seccion):void{
    this.listarseccion.push(nuevaseccion);
  }
  public escucharalumno(nuevoalumno: alumno):void{
    this.listaralumno.push(nuevoalumno);
  }
}
