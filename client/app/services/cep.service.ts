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
    let apiURL = '//viacep.com.br/ws/' + cep + '/json';
    return this.http.get(apiURL)
      .map((data => data.json()),
      this.populaCep(data => data.json())      
      );
  }

  private populaCep(data): Observable<any> {
    console.log("Cep na URL:" + data);
    let cep = data;

    cep.cep = data.cep;
    cep.logradouro = data.logradouro;
    cep.numero = data.numero;
    cep.complemento = data.complemento;
    cep.bairro = data.baresponseirro;
    cep.localidade = data.localidade;
    cep.uf = data.uf;
    return cep;
  }


}



