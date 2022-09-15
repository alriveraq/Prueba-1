import { Component,Input} from '@angular/core';
import { historial } from './../../modelos/historial';

@Component({
  selector: 'app-formulario-asis',
  templateUrl: './formulario-asis.component.html',
  styleUrls: ['./formulario-asis.component.scss']
})
export class FormularioAsisComponent{
  @Input()public asis!: historial;
}
