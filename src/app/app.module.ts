import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoConsultasComponent } from './components/listado-consultas/listado-consultas.component';
import { MostrarConsultaComponent } from './components/mostrar-consulta/mostrar-consulta.component';
import { MostrarRespuestaComponent } from './components/mostrar-respuesta/mostrar-respuesta.component';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { HttpClientModule } from '@angular/common/http';
import { SaltoDeLineaPipe } from './pipes/salto-de-linea.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListadoConsultasComponent,
    MostrarConsultaComponent,
    MostrarRespuestaComponent,
    SaltoDeLineaPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
