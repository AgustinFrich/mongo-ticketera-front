import { Consulta, eTipoConsulta } from 'src/app/classes/consulta';
import { ConsultaService } from './../../services/consulta.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import FS from 'fs';

const c1 = FS.readFileSync('../../consultas/consulta1');

@Component({
  selector: 'app-listado-consultas',
  templateUrl: './listado-consultas.component.html',
  styleUrls: ['./listado-consultas.component.css'],
})
export class ListadoConsultasComponent implements OnInit {
  constructor(conService: ConsultaService) {}

  @Output() seleccionarConsultaEvent = new EventEmitter<Consulta>();

  consultas: Consulta[] = [
    {
      nombre: 'consulta1',
      data: c1,
      tipo: eTipoConsulta.GET,
    },
    {
      nombre: 'consulta2',
      data: '{ objeto: valor2 }',
      tipo: eTipoConsulta.POST,
    },
    {
      nombre: 'consulta3',
      data: '{ objeto: valor3 }',
      tipo: eTipoConsulta.PUT,
    },
    {
      nombre: 'consulta4',
      data: '{ objeto: valor4 }',
      tipo: eTipoConsulta.DELETE,
    },
  ];

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
