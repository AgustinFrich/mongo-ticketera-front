import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-respuesta',
  templateUrl: './mostrar-respuesta.component.html',
  styleUrls: ['./mostrar-respuesta.component.css'],
})
export class MostrarRespuestaComponent implements OnInit {
  @Input() consultaResultado: string = '';

  constructor() {}

  ngOnInit(): void {}
}
