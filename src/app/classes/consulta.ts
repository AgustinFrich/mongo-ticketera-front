export class Consulta {
  nombre: string = '';
  data: any = '';
  tipo: eTipoConsulta;
  url: string;
  body: any;

  constructor(nombre: string, data: string, tipo: eTipoConsulta, url: string) {
    this.nombre = nombre;
    this.data = data;
    this.tipo = tipo;
    this.url = url;
  }
}

export enum eTipoConsulta {
  GET,
  POST,
  PUT,
  DELETE,
}
