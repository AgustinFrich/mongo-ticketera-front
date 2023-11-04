import { Component } from '@angular/core';
import { Consulta } from './classes/consulta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  consultaMostrada: Consulta | null = null;

  mostrarConsulta($event: Consulta) {
    this.consultaMostrada = $event;
  }
}
