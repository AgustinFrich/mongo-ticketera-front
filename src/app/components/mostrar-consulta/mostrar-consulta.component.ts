import {
  Input,
  Component,
  OnInit,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { Consulta } from 'src/app/classes/consulta';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-mostrar-consulta',
  templateUrl: './mostrar-consulta.component.html',
  styleUrls: ['./mostrar-consulta.component.css'],
})
export class MostrarConsultaComponent implements OnInit, OnChanges {
  @Input() consulta: null | Consulta = null;
  @Output() ejecutarConsultaEvent = new EventEmitter<string>();
  data = '';
  titulo = '';
  constructor(private consultaService: ConsultaService) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.consulta != null) {
      this.data = JSON.stringify(this.consulta.data, null, 4);
      this.titulo = this.consulta.nombre;
    }
  }

  async hacerConsulta() {
    if (this.consulta != null) {
      const result = await this.consultaService.traer(
        this.consulta.url,
        this.consulta.tipo,
        this.consulta.body
      );
      this.ejecutarConsultaEvent.next(result);
    }
  }
}
