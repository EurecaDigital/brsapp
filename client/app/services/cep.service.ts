import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class CepService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getCep(cep): Observable<any> {
    console.log('Cep pesquisado :' + cep);

    return this.http
      .get(`//viacep.com.br/ws/${cep}/json`)
      .map(dados => dados.json());
    this.populaCep(dados => dados.json())
      
  }

  private populaCep(dados): Observable<any> {
    let cep=dados.cep;

    cep.cep = dados.cep;
    cep.logradouro = dados.logradouro;
    cep.numero = dados.numero;
    cep.complemento = dados.complemento;
    cep.bairro = dados.bairro;
    cep.localidade = dados.localidade;
    cep.uf = dados.uf;
    return cep;
  }


}



