import { Component, Input } from '@angular/core';
import {historial} from './../../modelos/historial'
@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent{
  @Input() public Historial!: historial;
}
