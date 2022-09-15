import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormularioAlumnoComponent} from './componentes/formulario-alumno/formulario-alumno.component';
import {FormularioAsisComponent} from './componentes/formulario-asis/formulario-asis.component'
import {FormularioSeccionComponent} from './componentes/formulario-seccion/formulario-seccion.component';
import { ListaComponent } from './componentes/lista/lista.component'
import { SeccionComponent } from './componentes/seccion/seccion.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioAlumnoComponent,
    FormularioAsisComponent,
    FormularioSeccionComponent,
    SeccionComponent,
    ListaComponent,
    AlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
