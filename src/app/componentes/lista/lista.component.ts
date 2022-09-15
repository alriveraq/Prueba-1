import { Component, Input} from '@angular/core';
import { alumno } from 'src/app/modelos/alumno';
import { seccion } from 'src/app/modelos/seccion';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent{

  @Input() public listasec!: Array<seccion>
  @Input() public listaalum!: Array<alumno>
}
