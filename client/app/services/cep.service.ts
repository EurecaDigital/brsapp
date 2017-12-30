import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { UserService } from "./user.service";



@Injectable()

export class CepService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });


  constructor(private http: Http) { }
  getUsers(): Observable<any> {
    return this.http.get('/api/users').map(res => res.json());
  }

  getCeps(cep): Observable<any> {
    return this.http.get(`//viacep.com.br/ws/${cep}/json`).map(res => res.json())
      .map(dados => dados.json());

  }

  private populaCep(cepPopulado): Cep {
    let cep=new Cep();
    cep.cep = cepPopulado.cep;
    cep.logradouro = cepPopulado.logradouro;
    cep.numero = cepPopulado.numero;
    cep.complemento = cepPopulado.complemento;
    cep.bairro = cepPopulado.bairro;
    cep.cidade = cepPopulado.cidade;
    cep.uf = cepPopulado.uf;
    return cep;
  }


}



