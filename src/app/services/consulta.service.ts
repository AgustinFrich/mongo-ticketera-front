import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { eTipoConsulta } from '../classes/consulta';

@Injectable({
  providedIn: 'root',
})
export class ConsultaService {
  constructor(private httpClient: HttpClient) {}

  async traer(url: string, tipo: eTipoConsulta, body: any) {
    let retorno = '';

    switch (tipo) {
      case eTipoConsulta.GET:
        await this.httpClient.get(url).forEach((response: any) => {
          retorno = response.data;
        });
        break;
      case eTipoConsulta.POST:
        await this.httpClient.post(url, body).forEach((response: any) => {
          retorno = response.data;
        });
        break;
      case eTipoConsulta.PUT:
        await this.httpClient.put(url, body).forEach((response: any) => {
          retorno = response.data;
        });
        break;
      case eTipoConsulta.DELETE:
        await this.httpClient.delete(url).forEach((response: any) => {
          retorno = response.data;
        });
        break;
      default:
    }

    return retorno;
  }
}
