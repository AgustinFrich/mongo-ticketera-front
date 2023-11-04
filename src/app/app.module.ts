import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoConsultasComponent } from './components/listado-consultas/listado-consultas.component';
import { MostrarConsultaComponent } from './components/mostrar-consulta/mostrar-consulta.component';
import { MostrarRespuestaComponent } from './components/mostrar-respuesta/mostrar-respuesta.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoConsultasComponent,
    MostrarConsultaComponent,
    MostrarRespuestaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
