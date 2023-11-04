import { Input, Component, OnInit, OnChanges } from '@angular/core';
import { Consulta } from 'src/app/classes/consulta';

@Component({
  selector: 'app-mostrar-consulta',
  templateUrl: './mostrar-consulta.component.html',
  styleUrls: ['./mostrar-consulta.component.css'],
})
export class MostrarConsultaComponent implements OnInit, OnChanges {
  @Input() consulta: null | Consulta = null;
  data = '';

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.consulta != null) {
      this.data = JSON.stringify(this.consulta.data, null, 4);
    }
  }
}
