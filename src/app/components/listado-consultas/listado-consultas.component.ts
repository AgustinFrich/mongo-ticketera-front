import { Consulta, eTipoConsulta } from 'src/app/classes/consulta';
import { ConsultaService } from './../../services/consulta.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import consultasTraidas from '../../consultas/consultas';

@Component({
  selector: 'app-listado-consultas',
  templateUrl: './listado-consultas.component.html',
  styleUrls: ['./listado-consultas.component.css'],
})
export class ListadoConsultasComponent implements OnInit {
  constructor(conService: ConsultaService) {}

  @Output() seleccionarConsultaEvent = new EventEmitter<Consulta>();
  consultas = consultasTraidas;
  ngOnInit(): void {}

  getCssClass(tipo: eTipoConsulta) {
    let clase = '';
    switch (tipo) {
      case eTipoConsulta.GET:
        clase = 'border-info text-info';
        break;
      case eTipoConsulta.POST:
        clase = 'border-success text-success';
        break;
      case eTipoConsulta.PUT:
        clase = 'border-warning text-warning';
        break;
      case eTipoConsulta.DELETE:
        clase = 'border-danger text-danger';
        break;
    }
    return clase;
  }

  getEnumString(tipo: number): string {
    return eTipoConsulta[tipo];
  }

  mostrarConsulta(c: Consulta) {
    this.seleccionarConsultaEvent.emit(c);
  }
}
