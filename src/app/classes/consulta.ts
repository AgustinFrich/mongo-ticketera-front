export class Consulta {
  nombre: string = '';
  data: any = '';
  tipo: eTipoConsulta;

  constructor(nombre: string, data: string, tipo: eTipoConsulta) {
    this.nombre = nombre;
    this.data = data;
    this.tipo = tipo;
  }
}

export enum eTipoConsulta {
  GET,
  POST,
  PUT,
  DELETE,
}
