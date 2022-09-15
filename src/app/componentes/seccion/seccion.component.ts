import { Component, Input} from '@angular/core';
import {seccion} from './../../modelos/seccion'

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.scss']
})
export class SeccionComponent{
  @Input() public Seccion!: seccion;
}
